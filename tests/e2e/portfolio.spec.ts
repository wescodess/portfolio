import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  const unexpectedConsole: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') unexpectedConsole.push(message.text())
  })
  page.on('pageerror', error => unexpectedConsole.push(error.message))
  await page.goto('/')
  await page.waitForLoadState('networkidle')
  ;(page as typeof page & { unexpectedConsole?: string[] }).unexpectedConsole = unexpectedConsole
})

test.afterEach(async ({ page }) => {
  const messages = (page as typeof page & { unexpectedConsole?: string[] }).unexpectedConsole || []
  expect(messages, 'browser console and hydration errors').toEqual([])
})

test('publishes complete metadata and landmarks', async ({ page }) => {
  await expect(page.locator('main#main-content')).toBeVisible()
  await expect(page.locator('h1')).toHaveCount(1)
  await expect(page).toHaveTitle(/Senior Software Engineer.*Wesley Ukadike/)
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /^https:\/\//)
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /og-image\.png$/)
  await expect(page.locator('script[type="application/ld+json"]')).not.toHaveCount(0)
})

test('features only the three strongest projects on the homepage', async ({ page }) => {
  const projectCards = page.locator('[data-project-card]')

  await expect(projectCards).toHaveCount(3)
  await expect(page.getByRole('heading', { name: /^Budds/ })).toBeVisible()
  await expect(page.getByRole('heading', { name: /^CharterXE/ })).toBeVisible()
  await expect(page.getByRole('heading', { name: /^WACS/ })).toBeVisible()
  await expect(page.getByRole('heading', { name: /^Blackcopper/ })).toHaveCount(0)
  await expect(page.getByRole('heading', { name: /^SpacePAD/ })).toHaveCount(0)
})

test('keeps the hero fixed while content covers it, then pins navigation', async ({ page }) => {
  const hero = page.locator('.home-hero')
  const heroContent = page.locator('.home-hero__banner')
  const navigation = page.locator('nav[aria-label="Primary navigation"]').first()

  await expect(hero).toBeVisible()
  await expect(navigation).toHaveAttribute('data-nav-state', 'details')
  await expect(navigation.locator('[data-nav-panel="details"]')).toHaveCount(1)
  await expect(navigation.locator('[data-nav-panel="menu"]')).toHaveCount(0)
  await page.evaluate(() => window.scrollTo(0, Math.round(window.innerHeight * 0.5)))
  await page.waitForTimeout(100)

  const halfScroll = await hero.boundingBox()
  const halfOpacity = Number(await heroContent.evaluate(element => getComputedStyle(element).opacity))
  expect(Math.abs(halfScroll?.y || 0)).toBeLessThan(2)
  expect(halfOpacity).toBeGreaterThan(0)
  expect(halfOpacity).toBeLessThan(1)

  await page.evaluate(() => window.scrollTo(0, window.innerHeight + 200))
  await expect(navigation).toHaveAttribute('data-nav-state', 'menu')
  await expect(navigation.locator('[data-nav-panel="menu"]')).toHaveCount(1)
  await expect(navigation.locator('[data-nav-panel="details"]')).toHaveCount(0)
  await page.waitForTimeout(500)
  const navBox = await navigation.boundingBox()
  expect(Math.abs(navBox?.y || 0)).toBeLessThan(2)
  await expect(heroContent).toHaveCSS('opacity', '0')
})

test('keeps the intro mark centered after its animation completes', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' })
  const introMark = page.locator('.intro-mark')
  const introLogo = page.locator('.intro-logo')

  await expect(introLogo).toBeVisible()
  await page.waitForTimeout(875)

  const markBox = await introMark.boundingBox()
  const logoBox = await introLogo.boundingBox()
  expect(markBox).not.toBeNull()
  expect(logoBox).not.toBeNull()
  expect(Math.abs((logoBox!.x + logoBox!.width / 2) - (markBox!.x + markBox!.width / 2))).toBeLessThan(1)
  expect(Math.abs((logoBox!.y + logoBox!.height / 2) - (markBox!.y + markBox!.height / 2))).toBeLessThan(1)
})

test('animates page content and exposes a motion-free experience when requested', async ({ page }) => {
  const skillHeading = page.locator('[data-motion-section="skillset-copy"] h2')
  const frameworkTrack = page.locator('[data-motion-section="frameworks"] > div')

  await expect(page.locator('.intro-overlay')).toHaveCount(0, { timeout: 2_500 })
  await expect.poll(async () => Number(await skillHeading.evaluate(element => getComputedStyle(element).opacity)))
    .toBeLessThan(0.1)

  await skillHeading.scrollIntoViewIfNeeded()
  await expect(skillHeading).toHaveCSS('opacity', '1', { timeout: 2_000 })
  await expect(skillHeading).toHaveCSS('transform', 'none')

  await frameworkTrack.scrollIntoViewIfNeeded()
  await page.waitForTimeout(50)
  const firstTransform = await frameworkTrack.evaluate(element => getComputedStyle(element).transform)
  await page.evaluate(() => window.scrollBy(0, 400))
  await expect.poll(async () => frameworkTrack.evaluate(element => getComputedStyle(element).transform))
    .not.toBe(firstTransform)

  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.reload({ waitUntil: 'networkidle' })
  await expect(page.locator('.intro-overlay')).toHaveCount(0)
  await expect(page.locator('[data-motion-item="hero-title"]')).toHaveCSS('transform', 'none')
  await expect(page.locator('[data-motion-item="hero-title"] span span').first()).toHaveCSS('transform', 'none')
  await expect(page.locator('[data-motion-section="experience-copy"] h2')).toHaveCSS('opacity', '1')
  await expect(page.locator('[data-motion-section="experience-copy"] h2')).toHaveCSS('transform', 'none')
  await expect(page.locator('[data-motion-card]').first()).toHaveCSS('transform', 'none')
})

test('adds responsive lighting and tactile depth without changing semantics', async ({ page }, testInfo) => {
  const hero = page.locator('.home-hero__banner')
  const ambientGlow = page.locator('[data-ambient-glow]')
  const heading = page.locator('#hero-heading')

  await expect(heading).toHaveAttribute('aria-label', /Software engineer/)
  await expect(heading.locator('span[aria-hidden="true"]')).not.toHaveCount(0)

  if (testInfo.project.name.includes('desktop')) {
    const glowBefore = await ambientGlow.evaluate(element => getComputedStyle(element).backgroundImage)
    const heroBox = await hero.boundingBox()
    if (heroBox) {
      await page.mouse.move(heroBox.x + heroBox.width * 0.2, heroBox.y + heroBox.height * 0.25)
      await page.waitForTimeout(250)
    }
    const glowAfter = await ambientGlow.evaluate(element => getComputedStyle(element).backgroundImage)
    expect(glowAfter).not.toBe(glowBefore)

    const card = page.locator('[data-motion-card]').first()
    await card.scrollIntoViewIfNeeded()
    await page.waitForTimeout(700)
    const cardBox = await card.boundingBox()
    if (cardBox) {
      await page.mouse.move(cardBox.x + cardBox.width * 0.8, cardBox.y + cardBox.height * 0.25)
      await expect.poll(async () => card.evaluate(element => getComputedStyle(element).transform))
        .not.toBe('none')
    }
  }
})

test('pins the about section while the footer glides over it', async ({ page }) => {
  const about = page.locator('[data-sticky-about]')
  const footer = page.locator('#footer')
  const aboutTop = await about.evaluate(element => element.getBoundingClientRect().top + window.scrollY)

  await page.evaluate((scrollTop) => {
    document.documentElement.style.scrollBehavior = 'auto'
    window.scrollTo(0, scrollTop)
  }, aboutTop)
  await expect.poll(async () => Math.abs((await about.boundingBox())?.y || 0)).toBeLessThan(2)

  const footerTop = await footer.evaluate(element => element.getBoundingClientRect().top + window.scrollY)
  const viewportHeight = await page.evaluate(() => window.innerHeight)
  await page.evaluate(scrollTop => window.scrollTo(0, scrollTop), footerTop - viewportHeight * 0.5)
  await page.waitForTimeout(150)

  const overlappedAboutBox = await about.boundingBox()
  const footerBox = await footer.boundingBox()
  expect(Math.abs(overlappedAboutBox?.y || 0)).toBeLessThan(2)
  expect(footerBox?.y || 0).toBeGreaterThan(0)
  expect(footerBox?.y || 0).toBeLessThan(viewportHeight)

  const footerOwnsOverlap = await footer.evaluate((element) => {
    const bounds = element.getBoundingClientRect()
    const topmost = document.elementFromPoint(bounds.left + bounds.width / 2, bounds.top + 20)
    return Boolean(topmost && element.contains(topmost))
  })
  expect(footerOwnsOverlap).toBe(true)
})

test('supports navigation and defers reCAPTCHA until form use', async ({ page }, testInfo) => {
  await expect(page.locator('script[src*="recaptcha"]')).toHaveCount(0)

  if (testInfo.project.name.includes('mobile')) {
    const menuButton = page.getByRole('button', { name: 'Open navigation menu' })
    await menuButton.click()
    const dialog = page.getByRole('dialog', { name: 'Mobile navigation' })
    await expect(dialog).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(dialog).toBeHidden()
    await expect(menuButton).toBeFocused()
  }
  else {
    const navigation = page.locator('nav[aria-label="Primary navigation"]').first()
    await page.evaluate(() => window.scrollTo(0, window.innerHeight + 200))
    await expect(navigation).toHaveAttribute('data-nav-state', 'menu')
    await page.getByRole('link', { name: 'About' }).click()
    await expect(page).toHaveURL(/#about$/)
  }

  await page.route('**/api/contact', route => route.fulfill({
    status: 202,
    contentType: 'application/json',
    body: JSON.stringify({ ok: true }),
  }))
  await page.evaluate(() => {
    const windowWithRecaptcha = window as typeof window & {
      grecaptcha?: {
        execute: () => Promise<string>
        ready: (callback: () => void) => void
      }
    }
    windowWithRecaptcha.grecaptcha = {
      execute: async () => 'browser-test-token',
      ready: callback => callback(),
    }
  })

  await page.locator('#footer').scrollIntoViewIfNeeded()
  await page.getByLabel('Full name').fill('Wesley')
  await page.getByLabel('Email').fill('wesley@example.com')
  await page.getByLabel('Message').fill('This is a valid message for the contact form.')
  await page.getByRole('button', { name: 'Send message' }).click()
  await expect(page.getByText('Thanks — your message has been sent.')).toBeVisible()
})

test('does not overflow the viewport horizontally', async ({ page }) => {
  const dimensions = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }))
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1)
})

test('renders every footer social icon from a local asset', async ({ page, request }) => {
  const icons = page.locator('[data-social-icon]')
  await page.locator('footer').last().scrollIntoViewIfNeeded()

  const iconAssets = await icons.evaluateAll(elements => elements.map((element) => {
    const styles = getComputedStyle(element)
    return {
      asset: styles.getPropertyValue('--social-icon-url'),
      mask: styles.maskImage || styles.webkitMaskImage,
    }
  }))

  expect(iconAssets.length).toBeGreaterThan(0)
  for (const icon of iconAssets) {
    expect(icon.mask).not.toBe('none')
    const assetPath = icon.asset.match(/url\(["']?([^"')]+)/)?.[1]
    expect(assetPath).toMatch(/^\/icons\/.+\.svg$/)
    expect((await request.get(assetPath!)).ok()).toBe(true)
  }
})

test('serves the projects route and public operational endpoints', async ({ page, request }, testInfo) => {
  await page.goto('/projects')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Product engineering')
  await expect(page).toHaveTitle(/Selected Projects.*Wesley Ukadike/)
  await expect(page.locator('[data-project-tier="featured"]')).toHaveCount(3)
  await expect(page.locator('[data-project-tier="standard"]')).toHaveCount(2)
  await expect(page.getByRole('heading', { name: /^Budds/ })).toBeVisible()
  await expect(page.getByRole('heading', { name: /^CharterXE/ })).toBeVisible()
  await expect(page.getByRole('heading', { name: /^WACS/ })).toBeVisible()
  await expect(page.getByRole('heading', { name: /^Blackcopper/ })).toBeVisible()
  await expect(page.getByRole('heading', { name: /^SpacePAD/ })).toBeVisible()
  const buddsCard = page.locator('[data-project-card]').filter({
    has: page.getByRole('heading', { name: /^Budds/ }),
  })
  await expect(buddsCard.locator('> a')).toHaveAttribute(
    'href',
    'https://budds.pages.dev',
  )
  await expect(page.getByText('Organize QR', { exact: true })).toHaveCount(0)
  await expect(page.getByText('Smart Menu', { exact: true })).toHaveCount(0)
  await expect(page.getByText('Nonames', { exact: true })).toHaveCount(0)
  await expect(page.locator('[data-project-card] > a')).toHaveCount(4)
  await expect(page.locator('[data-project-card] > div')).toHaveCount(1)

  const health = await request.get('/healthz')
  expect(health.ok()).toBe(true)
  expect(await health.json()).toMatchObject({ status: 'ok' })

  const robots = await request.get('/robots.txt')
  expect(robots.ok()).toBe(true)
  expect(await robots.text()).toContain('Sitemap:')

  if (testInfo.project.name.includes('desktop')) {
    const invalidContact = await request.post('/api/contact', { data: {} })
    expect(invalidContact.status()).toBe(400)
  }
})
