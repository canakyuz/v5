
export const contactContent = {
  sectionNumber: "04 — Contact",
  title: {
    main: "Let's create",
    accent: "something amazing"
  },
  subtitle: "Ready to bring your ideas to life?",
  description: "Get in touch for new projects, creative collaborations, or just to say hello. I'd love to hear about your next big idea.",
  contactInfo: {
    email: {
      label: "Email",
      value: "john.doe@example.com",
      href: "mailto:john.doe@example.com"
    },
    phone: {
      label: "Phone",
      value: "+90 555 123 45 67",
      href: "tel:+905551234567"
    },
    location: {
      label: "Location",
      value: "Istanbul, Turkey"
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
        url: "https://github.com",
        icon: "Github"
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com",
        icon: "Linkedin"
      },
      {
        name: "Twitter",
        url: "https://twitter.com",
        icon: "Twitter"
      },
      {
        name: "Instagram",
        url: "https://instagram.com",
        icon: "Instagram"
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
