import type { Rule } from 'sanity'
// This file contains the schema definitions for your Sanity CMS

export const schemaTypes = [
  // Projects Schema - Container document that holds array of projects
  {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
      {
        name: 'projects',
        title: 'Projects',
        type: 'array',
        validation: (Rule: Rule) => Rule.required().min(1).unique(),
        of: [
          {
            type: 'object',
            name: 'project',
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string',
                validation: (Rule: Rule) => Rule.required()
              },
              {
                name: 'decs',
                title: 'Legacy description',
                type: 'text',
                deprecated: {
                  reason: 'Use the Description field. This field remains for existing content.'
                }
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text',
                validation: (Rule: Rule) => Rule.max(600)
              },
              {
                name: 'image',
                title: 'Image',
                type: 'image',
                options: {
                  hotspot: true
                },
                validation: (Rule: Rule) => Rule.required()
              },
              {
                name: 'url',
                title: 'Project URL',
                type: 'url'
              },
              {
                name: 'mobile',
                title: 'Mobile Project',
                type: 'boolean',
                description: 'Check if this is a mobile application'
              }
            ]
          }
        ]
      }
    ]
  },

  // Experience Schema
  {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
      {
        name: 'experience_title',
        title: 'Experience Title',
        type: 'string',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'experience_subtitle',
        title: 'Experience Subtitle',
        type: 'text',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'experiences',
        title: 'Work Experiences',
        type: 'array',
        validation: (Rule: Rule) => Rule.required().min(1).unique(),
        of: [
          {
            type: 'object',
            name: 'experience',
            fields: [
              {
                name: 'role',
                title: 'Role/Position',
                type: 'string',
                validation: (Rule: Rule) => Rule.required()
              },
              {
                name: 'company',
                title: 'Company',
                type: 'string',
                validation: (Rule: Rule) => Rule.required()
              },
              {
                name: 'logo',
                title: 'Company Logo',
                type: 'image',
                options: {
                  hotspot: true
                },
                validation: (Rule: Rule) => Rule.required()
              },
              {
                name: 'start',
                title: 'Start Date',
                type: 'string',
                validation: (Rule: Rule) => Rule.required()
              },
              {
                name: 'end',
                title: 'End Date',
                type: 'string',
                description: 'Leave empty if this is the current position'
              }
            ]
          }
        ]
      }
    ]
  },

  // Frameworks Schema - Container that holds array of frameworks
  {
    name: 'frameworks',
    title: 'Frameworks & Technologies',
    type: 'document',
    fields: [
      {
        name: 'frameworks',
        title: 'Frameworks',
        type: 'array',
        validation: (Rule: Rule) => Rule.required().min(1).unique(),
        of: [
          {
            type: 'object',
            name: 'framework',
            fields: [
              {
                name: 'title',
                title: 'Name',
                type: 'string',
                validation: (Rule: Rule) => Rule.required()
              },
              {
                name: 'icon',
                title: 'Icon',
                type: 'image',
                options: {
                  hotspot: true
                },
                validation: (Rule: Rule) => Rule.required()
              }
            ]
          }
        ]
      }
    ]
  },

  // About Schema
  {
    name: 'about',
    title: 'About Me',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Main Title',
        type: 'string',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'text',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'image',
        title: 'Profile Image',
        type: 'image',
        options: {
          hotspot: true
        },
        validation: (Rule: Rule) => Rule.required()
      }
    ]
  },

  // Banner Schema
  {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
      {
        name: 'banner_title',
        title: 'Banner Title',
        type: 'string',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'banner_image',
        title: 'Banner Image',
        type: 'image',
        options: {
          hotspot: true
        },
        validation: (Rule: Rule) => Rule.required()
      }
    ]
  },

  // Skillset Schema
  {
    name: 'skillset',
    title: 'Skills & Expertise',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Main Title',
        type: 'string',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'text',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'skills',
        title: 'Skills',
        type: 'array',
        validation: (Rule: Rule) => Rule.required().min(1).unique(),
        of: [
          {
            type: 'object',
            name: 'skill',
            fields: [
              {
                name: 'title',
                title: 'Skill Name',
                type: 'string',
                validation: (Rule: Rule) => Rule.required()
              },
              {
                name: 'desc',
                title: 'Description',
                type: 'text',
                validation: (Rule: Rule) => Rule.required()
              },
              {
                name: 'icon',
                title: 'Skill Icon',
                type: 'image',
                options: {
                  hotspot: true
                },
                validation: (Rule: Rule) => Rule.required()
              }
            ]
          }
        ]
      }
    ]
  },

  // Philosophy Schema
  {
    name: 'philosophy',
    title: 'Philosophy',
    type: 'document',
    fields: [
      {
        name: 'philosophy_title',
        title: 'Philosophy Title',
        type: 'string',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'philosophy_subtitle',
        title: 'Philosophy Subtitle',
        type: 'text',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'image',
        title: 'Philosophy Image',
        type: 'image',
        options: {
          hotspot: true
        },
        validation: (Rule: Rule) => Rule.required()
      }
    ]
  },

  // Footer Schema
  {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Footer Title',
        type: 'string',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'subtitle',
        title: 'Footer Subtitle',
        type: 'text',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'banner_image',
        title: 'Footer Banner Image',
        type: 'image',
        options: {
          hotspot: true
        },
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'cv',
        title: 'CV File',
        type: 'file',
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'socials',
        title: 'Social Media Links',
        type: 'array',
        validation: (Rule: Rule) => Rule.required().min(1).unique(),
        of: [
          {
            type: 'object',
            name: 'social',
            fields: [
              {
                name: 'label',
                title: 'Accessible label',
                type: 'string',
                description: 'For example: GitHub or LinkedIn',
                validation: (Rule: Rule) => Rule.required().min(2).max(50)
              },
              {
                name: 'icon',
                title: 'Icon Name',
                type: 'string',
                description: 'e.g., "mdi:github", "mdi:linkedin"',
                validation: (Rule: Rule) => Rule.required()
              },
              {
                name: 'link',
                title: 'Social Link',
                type: 'url',
                validation: (Rule: Rule) => Rule.required()
              }
            ]
          }
        ]
      }
    ]
  }
]
