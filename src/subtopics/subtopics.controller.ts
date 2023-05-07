import { Controller, Get } from '@nestjs/common';

interface subtopics {
    id: number,
    name: string;
    parentId: number,
    sub_field: SubField[];
}

interface SubField {
    id: number;
    topic: string;
    desc : string;
}

@Controller('subtopics')
export class SubtopicsController {
    private subtopics: subtopics[] = [
        {
            id: 1,
            parentId: 1,
            name: 'sales marketing',
            sub_field: [
                {
                    id: 1,
                    topic: 'Customer Relationship Management (CRM) Systems',
                    desc:"CRM systems are software platforms that help manage customer interactions, track leads and opportunities, and facilitate sales processes. They provide a centralized database for storing customer information, communication history, and sales activities."
                },
                {
                    id: 2,
                    topic: 'Sales Force Automation (SFA)',                    
                    desc:"SFA tools automate key sales activities such as lead management, contact management, opportunity tracking, and sales forecasting. They help sales teams streamline their workflows, improve collaboration, and gain visibility into the sales pipeline"
                },
                {
                    id: 3,
                    topic: 'Sales Analytics and Reporting',
                    desc:"Sales analytics tools provide insights into sales performance and help sales managers and representatives make data-driven decisions. They track key sales metrics, generate reports and dashboards, and identify trends and opportunities for improvement."
                },
                {
                    id: 4,
                    topic: 'Sales Process Automation',
                    desc: 'Sales process automation involves automating repetitive tasks and standardizing sales processes. It may include automating lead qualification, contract generation, order processing, and proposal creation. Sales process automation reduces errors, accelerates deal closure, and improves overall sales efficiency'
                },
                {
                    id: 5,
                    topic: 'Sales Enablement:',
                    desc:"Sales enablement tools and technologies empower sales teams with the content, training, and resources they need to engage prospects and close deals effectively. It includes features like sales collateral management, sales training platforms, and sales content automation"
                },
                {
                    id: 6,
                    topic: 'Workflow Automation',
                    desc:"Workflow automation automates manual and repetitive tasks across the sales cycle. It may involve integrating various sales tools and systems, automating data entry, triggering notifications and alerts, and streamlining approval processes. Workflow automation improves efficiency, reduces errors, and ensures consistency."
                },
                {
                    id: 7,
                    topic: 'Lead Generation and Nurturing',
                    desc:"Sales automation helps generate and nurture leads through tools like lead capture forms, lead scoring, automated lead nurturing campaigns, and lead qualification workflows. It enables sales teams to identify and prioritize high-quality leads and improve conversion rates."
                },
                {
                    id: 8,
                    topic: 'Sales Performance Management',
                    desc:"Sales performance management tools track and measure sales team performance against set goals and targets. They include features like sales dashboards, performance tracking, incentive management, and gamification to motivate and reward sales representatives."
                }
            ]
        },
        {
            id: 2,
            parentId: 2,
            name: 'Marketing Automation',
            sub_field: [
                {
                    id: 1,
                    topic: 'Email Marketing Automation:',
                    desc:"The process of automating email campaigns, including lead nurturing, sending personalized emails, and triggering emails based on specific actions taken by users."
                },
                {
                    id: 2,
                    topic: 'Automated Reporting', 
                    desc:"Automatically generating reports on marketing performance metrics, including website traffic, lead generation, and sales conversions."
                },
                {
                    id: 3,
                    topic: 'Landing Page Optimization',
                    desc:"Improving the conversion rate of landing pages through A/B testing, optimization of copy and design, and personalization."
                },
                {
                    id: 4,
                    topic: 'Lead Scoring', 
                    desc:"The process of assigning a score to leads based on their level of engagement with your brand, enabling you to focus on leads with a higher potential for conversion."
                },
                {
                    id: 5,
                    topic: 'CRM Integration', 
                    desc:" Integrating your Marketing Automation platform with your CRM system to enable better tracking and management of leads and customers."
                },
                {
                    id: 6,
                    topic: 'Lead Nurturing', 
                    desc:"The process of building relationships with prospects through targeted, personalized content to move them down the sales funnel."
                },
                {
                    id: 7,
                    topic: 'Social Media Automation', 
                    desc:"Automating social media campaigns, including scheduling posts, responding to messages and comments, and tracking engagement metrics."
                }
                
            ]
        },
        {
            id: 3,
            parentId: 3,
            name: 'API Questions',
            sub_field: [
                {
                    id: 1,
                    topic: 'RESTful API', 
                    desc:"Understanding the principles and best practices of designing and implementing RESTful APIs, including resource identification, HTTP methods, status codes, and authentication"
                },
                {
                    id: 2,
                    topic: 'API Documentation',  
                    desc:"Creating comprehensive and user-friendly documentation for APIs, including details on endpoints, request/response formats, authentication methods, and error handling."
                },
                {
                    id: 3,
                    topic: 'API Authentication',   
                    desc:"Exploring different authentication mechanisms for API access, such as API keys, OAuth, JWT (JSON Web Tokens), and session-based authentication."
                },
                {
                    id: 4,
                    topic: 'API Versioning',
                    desc: "Managing API versioning to ensure backward compatibility while introducing new features or making changes to the API design."
                }
            ]
        },
        {
            id: 4,
            parentId: 4,
            name: 'Personalization',
            sub_field: [
                {
                    id: 1,
                    topic: 'Personalization Strategy',
                    desc:"Developing a personalized marketing strategy involves identifying customer segments, gathering data, creating user profiles, and using that information to deliver customized experiences."
                },
                {
                    id: 2,
                    topic: 'Customer Segmentation',
                    desc:" Customer segmentation involves grouping customers based on shared characteristics such as demographics, behavior, and preferences."
                },
                {
                    id: 3,
                    topic: 'Content Personalization:',
                    desc:"This involves using data to deliver customized content based on user interests and preferences. Examples include personalized product recommendations, customized email newsletters, and personalized landing pages."
                },
                {
                    id: 4,
                    topic: 'Data Collection and Analysis',
                    desc: "Collecting and analyzing data is crucial for developing effective personalization strategies. This involves tracking user behavior, preferences, and interactions across different channels and touchpoints."
                },
                {
                    id: 5,
                    topic: 'Personalized Email Marketing',
                    desc: "Email marketing remains one of the most effective marketing channels, and personalization can help increase open rates, click-through rates, and conversions. This involves using data to tailor email content and subject lines to individual users."
                }
            ]
        },
        {
            id: 5,
            parentId: 5,
            name: 'Email Marketing',
            sub_field: [
                {
                    id: 1,
                    topic: 'Email Marketing Strategy',
                    desc:"Developing an effective email marketing strategy involves defining goals, identifying target audiences, planning email campaigns, and determining key performance indicators (KPIs) for measuring success."
                },
                {
                    id: 2,
                    topic: 'Building an Email List',
                    desc:"Strategies for building a quality email list, including capturing leads through website sign-up forms, landing pages, lead magnets, social media, and other channels. This topic covers best practices for list growth and compliance with email regulations."
                },
                {
                    id: 3,
                    topic: 'Email Design and Layout',
                    desc:" Optimizing email design and layout for maximum impact and engagement. This includes considerations such as mobile responsiveness, eye-catching visuals, clear call-to-action (CTA) buttons, and readable content."
                },
                {
                    id: 4,
                    topic: 'Email Copywriting',
                    desc: "Crafting compelling email copy that grabs attention, communicates value, and encourages action. This topic covers writing effective subject lines, personalizing email content, storytelling, using persuasive language, and optimizing email length."
                },
                {
                    id: 5,
                    topic: 'Segmentation and Personalization',
                    desc: "Using customer data to segment email lists and deliver personalized content based on user preferences, demographics, behavior, or purchase history. This topic covers strategies for effective segmentation and dynamic content personalization."
                }
            ]
        },
        {
            id: 6,
            parentId: 6,
            name: 'Demand Generation',
            sub_field: [
                {
                    id: 1,
                    topic: 'Lead generation',
                    desc:" Lead generation is the process of attracting and capturing potential customers' interest in a product or service. This topic covers the different strategies and tactics used to generate leads, such as content marketing, SEO, social media, and paid advertising"
                },
                {
                    id: 2,
                    topic: 'Marketing automation',
                    desc: "Marketing automation refers to the use of software tools to automate repetitive marketing tasks and workflows, such as lead nurturing, email campaigns, and social media management. This topic covers the benefits and best practices of marketing automation, as well as the different tools available."
                },
                {
                    id: 3,
                    topic: 'Account-based marketing',
                    desc:" Account-based marketing (ABM) is a strategy that focuses on targeting high-value accounts and delivering personalized marketing messages to them. This topic covers the different stages of an ABM campaign, such as account selection, personalized content creation, and measurement."
                }
            ]
        }
    ];

    @Get()
    findAll(): subtopics[] {
        return this.subtopics;
    }
}
