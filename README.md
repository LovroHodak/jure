TAILWIND 
1. npm install -D tailwindcss postcss autoprefixer

2. npx tailwindcss init -p

3. /tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

4. /index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

5. /tailwind.js (src)
export const tw = new Proxy(
  {},
  {
    get(_, el) {
      const El = el;
      return ([classString]) =>
        ({ children, className, ...props }) =>
          (
            <El {...props} className={`${classString} ${className}`}>
              {children}
            </El>
          );
    },
  }
);

<!-- IF USING FORWARD REF -->
import React, { forwardRef } from "react";

// settings for being able to use refrences and classes on tailwind components
export const tw = new Proxy(
  {},
  {
    get(_, el) {
      const El = el;
      return ([classString]) =>
        forwardRef(({ children, className, ...props }, ref) =>
          (
            <El ref={ref} {...props} className={`${classString} ${className}`}>
              {children}
            </El>
          ));
    },
  }
);

6. ctrl + shift + p (workspace settings(JSON))

{
    "tailwindCSS.includeLanguages": {
      "typescript": "javascript", // if you are using typescript
      "typescriptreact": "javascript" // if you are using typescript with react
    },
    "editor.quickSuggestions": {
      "strings": true // forces VS Code to trigger completions when editing "string" content
    },
    "tailwindCSS.experimental.classRegex": [
      "tw`([^`]*)", // tw`...`
      "tw\\.[^`]+`([^`]*)`", // tw.xxx<xxx>`...`
      "tw\\(.*?\\).*?`([^`]*)" // tw(Component)<xxx>`...`
    ]
  }



7. npm i bootstrap-icons

8. //index.js
import 'bootstrap-icons/font/bootstrap-icons.css';

9. npm install react-router-dom@5.2.0