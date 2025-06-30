# My New Portfolio

A modern and interactive personal portfolio built with Next.js, React, and cutting-edge technologies to showcase skills, projects, and experience.

## Description

This portfolio is designed to be a visually appealing and engaging platform for presenting my professional background. It leverages 3D graphics, smooth animations, and a responsive design to provide an exceptional user experience across all devices. The portfolio highlights key skills, showcases notable projects, and provides an easy way for visitors to get in touch.

## Features

*   **Interactive 3D Graphics:** Engaging 3D models and animations using React Three Fiber and Drei.
*   **Smooth Animations:** GSAP (GreenSock Animation Platform) is used for creating fluid and visually appealing animations throughout the site.
*   **Responsive Design:** Built with Tailwind CSS, ensuring optimal viewing experience on all devices.
*   **Dynamic Content:** Utilizes Next.js for server-side rendering, enabling dynamic content updates and improved SEO.
*   **Interactive UI Components:** Custom interactive UI components like hover buttons and animated testimonials.
*   **Easy Contact:** A dedicated contact section with email integration.
*   **Skill Showcase:** A visually appealing display of skills with animated icons.
*   **Project Highlights:** A dedicated section to showcase projects with descriptions and links.
*   **Animated Background:** A dynamic dotted background with animated text.
*   **Preloader:** A splash screen with animated entrance and exit transitions.
*   **Navbar with Scroll Detection:** A navigation bar that adapts its appearance based on scroll position.
*   **Orbiting Elements:** Visually interesting orbiting elements to add dynamism.
*   **Toast Notifications:** Uses `react-toastify` for displaying toast notifications.

## Technologies Used

*   **JavaScript:** Primary programming language.
*   **Next.js:** React framework for server-side rendering and routing.
*   **React:** JavaScript library for building user interfaces.
*   **React Three Fiber:** React renderer for Three.js, used for 3D graphics.
*   **React Three Drei:** Collection of useful helpers and abstractions for React Three Fiber.
*   **GSAP (GreenSock Animation Platform):** JavaScript library for creating high-performance animations.
*   **Tailwind CSS:** Utility-first CSS framework for styling.
*   **clsx:** Utility for constructing className strings conditionally.
*   **tailwind-merge:** Utility for resolving Tailwind CSS class conflicts.
*   **framer-motion:** Library for declarative animations.
*   **lucide-react:** Icon library.
*   **@emailjs/browser:** Library for sending emails from the client-side.
*   **maath/random:** Utility for generating random numbers.
*   **next/font/google:** For importing and using Google Fonts.
*   **Typed.js:** For creating typing animations.
*   **shadcn-ui:** Component library for building UI components.

## Installation

Follow these steps to set up the project locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/zzayd30/New-Portfolio.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd New-Portfolio
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

4.  **Configure Environment Variables:**

    *   Create a `.env.local` file in the root directory.
    *   Add your EmailJS credentials:

        ```
        NEXT_PUBLIC_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID
        NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID
        NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
        ```

        Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` with your actual EmailJS credentials.

5.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    Open your browser and navigate to `http://localhost:3000` to view the portfolio.

## Usage

The portfolio is designed to be easily customizable. You can modify the content, styling, and animations to fit your personal brand.

*   **Content:** Update the text and images in the component files (e.g., `About.js`, `Projects.jsx`) to reflect your own information.
*   **Styling:** Modify the Tailwind CSS classes in the component files or update the global styles in `app/globals.css`.
*   **Animations:** Adjust the animation parameters in `utils/motion.js` or modify the GSAP animations in the component files.
*   **3D Models:** Replace the 3D models in the `public/planet/` directory with your own models. Ensure proper licensing and attribution.
*   **Skills:** Update the `skills` array in `component/Skills.js` with your own skills and corresponding image sources.

Example: Modifying the About section

1.  Open `component/About.js`.

2.  Locate the text content you want to change.

3.  Modify the text to reflect your own information.

    ```javascript
    // Example: Changing the introduction text
    <p className='text-secondary text-[18px] max-w-3xl leading-[30px]'>
        I'm a passionate software engineer with experience in building web applications.
    </p>
    ```

## Project Structure

```
New-Portfolio/
├── app/                  # Next.js application directory
│   ├── layout.js         # Root layout component
│   ├── page.js           # Main page component
│   ├── styles.js         # Reusable CSS class names
│   └── preloader/        # Preloader component
│       └── Predesign.js
├── component/            # React components
│   ├── canvas/           # 3D canvas components
│   │   ├── Earth.jsx
│   │   ├── Computers.jsx
│   │   ├── Stars.jsx
│   │   └── index.js
│   ├── magicui/          # Custom UI components
│   │   ├── animated-testimonials.jsx
│   │   ├── interactive-hover-button.jsx
│   │   ├── orbiting-circles.jsx
│   │   └── projects.jsx
│   ├── About.js          # About section component
│   ├── Background.js     # Background component
│   ├── Footer.js         # Footer component
│   ├── Loader.js         # Loading indicator component
│   ├── Navbar.js         # Navigation bar component
│   └── Skills.js         # Skills section component
├── hoc/                  # Higher-order components
│   ├── SectionWrapper.jsx
│   └── index.js
├── lib/                  # Utility functions
│   └── utils.js
├── public/               # Static assets
│   ├── assets/           # Image assets
│   │   └── index.js
│   ├── planet/           # 3D model assets
│   │   └── license.txt
│   └── favicon.ico
├── utils/                # Utility functions
│   └── motion.js
├── components.json       # shadcn-ui configuration
├── jsconfig.json         # JavaScript compiler configuration
├── package.json          # Project dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── README.md             # Project documentation
└── tailwind.config.js    # Tailwind CSS configuration
```

## Contributing

Contributions are welcome! Please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, descriptive messages.
4.  Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
