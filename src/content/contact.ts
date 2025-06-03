
export const contactContent = {
  sectionNumber: "04 — Contact",
  title: {
    main: "Let's work",
    accent: "together"
  },
  subtitle: "Ready to bring your ideas to life?",
  description: "Get in touch for new projects, creative collaborations, or just to say hello. I'd love to hear about your next frontend challenge.",
  contactInfo: {
    email: {
      label: "Email",
      value: "canakyuz23@gmail.com",
      href: "mailto:canakyuz23@gmail.com"
    },
    phone: {
      label: "Phone",
      value: "+90 546 870 04 09",
      href: "tel:+905468700409"
    },
    location: {
      label: "Location",
      value: "Turkey"
    }
  },
  form: {
    title: "Send a Message",
    fields: {
      name: {
        label: "Full Name",
        placeholder: "Enter your full name",
        required: true
      },
      email: {
        label: "Email Address",
        placeholder: "Enter your email address",
        required: true
      },
      subject: {
        label: "Subject",
        placeholder: "What's this about?",
        required: true
      },
      message: {
        label: "Message",
        placeholder: "Tell me about your project, ideas, or just say hello...",
        required: true
      }
    },
    submitButton: {
      text: "Send Message",
      loadingText: "Sending..."
    }
  },
  social: {
    title: "Follow Me",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/canakyuz",
        icon: "Github"
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com",
        icon: "Linkedin"
      },
      {
        name: "Portfolio",
        url: "https://canakyuz.dev",
        icon: "ExternalLink"
      },
      {
        name: "Email",
        url: "mailto:canakyuz23@gmail.com",
        icon: "Mail"
      }
    ]
  },
  toast: {
    success: {
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you as soon as possible."
    },
    error: {
      title: "Something went wrong",
      description: "Please try again or contact me directly via email."
    }
  }
};
