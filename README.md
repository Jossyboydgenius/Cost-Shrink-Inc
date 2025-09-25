# Cost Shrink Inc

A modern, responsive business consulting website built with Next.js 15, TypeScript, and Tailwind CSS. Cost Shrink Inc specializes in helping businesses reduce operational costs and improve profitability through expert analysis and strategic recommendations.

## 🚀 Features

### Core Pages
- **Homepage**: Modern landing page with hero section, services overview, and call-to-action
- **About**: Company information, mission, and team details
- **Services**: Detailed breakdown of consulting services offered
- **Consultation**: Interactive consultation request form with real-time validation
- **Contact**: Contact form with multiple communication channels
- **Terms of Service**: Legal terms and conditions

### Key Functionality
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Email Integration**: Automated email notifications using ZeptoMail API
- **Form Validation**: Client-side and server-side validation for all forms
- **Modern UI/UX**: Clean, professional design with smooth animations
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Performance Optimized**: Built with Next.js 15 and Turbopack for fast loading

### Services Offered
- Cost Savings Analysis
- Business Structure Review
- Personalized Action Plans
- Service Recommendations
- Financial Consultation
- Operational Efficiency Assessment

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Email Service**: ZeptoMail
- **Email Templates**: Nodemailer
- **Build Tool**: Turbopack
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- ZeptoMail account for email functionality

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <repository-url>
cd cost-shrink-inc
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:

```env
# ZeptoMail Configuration
ZEPTOMAIL_TOKEN=your_zeptomail_token_here
ZEPTOMAIL_FROM_EMAIL=your_verified_email@domain.com
ZEPTOMAIL_FROM_NAME=Cost Shrink Inc

# Contact Information
CONTACT_EMAIL=info@costshrink.com
CONTACT_PHONE=+1 (416) 616-8348
```

### 4. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
cost-shrink-inc/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── api/               # API routes
│   │   │   └── send-email/    # Email sending endpoint
│   │   ├── consultation/      # Consultation request page
│   │   ├── contact/           # Contact page
│   │   ├── services/          # Services page
│   │   ├── terms-of-service/  # Terms page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/            # Reusable components
│   │   ├── sections/          # Page sections
│   │   │   ├── Contact.tsx    # Contact form component
│   │   │   ├── Footer.tsx     # Site footer
│   │   │   └── Header.tsx     # Site header/navigation
│   │   └── ConsultationForm.tsx # Consultation form
│   └── email/                 # Email templates and utilities
│       ├── templates/         # HTML email templates
│       └── index.ts           # Email service configuration
├── public/                    # Static assets
├── .env.local                 # Environment variables (create this)
├── package.json              # Dependencies and scripts
├── tailwind.config.ts        # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 📧 Email Configuration

The application uses ZeptoMail for sending emails. To set up email functionality:

1. Sign up for a [ZeptoMail account](https://www.zoho.com/zeptomail/)
2. Verify your domain and get your API token
3. Add the token and sender email to your `.env.local` file
4. Test email functionality using the contact and consultation forms

### Email Templates
- **Contact Form**: Simple notification email for contact inquiries
- **Consultation Request**: Detailed email with consultation preferences and business information

## 🎨 Customization

### Styling
- Modify `src/app/globals.css` for global styles
- Update `tailwind.config.ts` for theme customization
- Component-specific styles are handled with Tailwind classes

### Content
- Update company information in the respective page components
- Modify service offerings in `src/app/services/page.tsx`
- Customize email templates in `src/email/templates/`

### Branding
- Replace logo and favicon in the `public/` directory
- Update color scheme in Tailwind configuration
- Modify company contact information in environment variables

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms
The application can be deployed on any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify
- Heroku

## 🔒 Environment Variables

Required environment variables for production:

```env
ZEPTOMAIL_TOKEN=your_production_token
ZEPTOMAIL_FROM_EMAIL=noreply@yourdomain.com
ZEPTOMAIL_FROM_NAME=Cost Shrink Inc
CONTACT_EMAIL=info@yourdomain.com
CONTACT_PHONE=your_phone_number
```

## 🐛 Troubleshooting

### Common Issues

1. **Email not sending**: Check ZeptoMail token and sender email verification
2. **Build errors**: Ensure all TypeScript types are properly defined
3. **Styling issues**: Clear browser cache and check Tailwind compilation
4. **Mobile responsiveness**: Test on actual devices, not just browser dev tools

### Development Tips

- Use `npm run dev` with Turbopack for faster development builds
- Check browser console for client-side errors
- Monitor server logs for API route issues
- Test email functionality in development with test email addresses

## 📞 Support

For technical support or business inquiries:
- **Email**: info@costshrink.com
- **Phone**: +1 (416) 616-8348
- **Website**: [costshrink.ca](https://costshrink.ca)

## 📄 License

This project is proprietary software owned by Cost Shrink Inc. All rights reserved.

---

Built with ❤️ by the Cost Shrink Inc development team.
