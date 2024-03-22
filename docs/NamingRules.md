# Naming Rules

Hello! To make our life in this codebase easier and more consistent, we will follow these naming rules for the upcoming tasks and every code line written here. 🙂

# Content List
- [Why do we need naming rules?](#why-do-we-need-naming-rules)
- [JS naming rules](#js-naming-rules)
- [CSS naming rules](#css-naming-rules)

---
## Why do we need naming rules:

When working on a project, adhering to consistent naming conventions is essential for readability, maintainability, and collaboration among team members. Remember, clean code always looks like it was written by someone who cares (Robert C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship).

## JS Naming Rules:
1. **Use camelCase**: For variables, function names, and object properties, use camelCase (starting with a lowercase letter, with subsequent words capitalized).

2. **Constructor functions & Component classes/functions in PascalCase**: If you're defining constructor functions (functions intended to be used with new), use PascalCase (starting with an uppercase letter, with subsequent words capitalized).

3. **Constants in UPPERCASE**: If you're using constants, it's a convention to name them in uppercase letters with underscores separating words.

4. **Be descriptive**: Name variables, functions, and objects in a way that clearly communicates their purpose or functionality.

5. **Avoid using reserved words**: Don't use JavaScript reserved words like var, function, if, etc., as identifiers.


### Example:
```javascript
import React from 'react';

class MyComponent extends React.Component {
    state = {
        userName: "John",
    };

    calculateArea = (radius) => {
        return Math.PI * radius * radius;
    };

    MAX_ATTEMPTS = 5;

    render() {
        return (
            <div>
                <p>{this.state.userName}</p>
            </div>
        );
    }
}

export default MyComponent;
```

## CSS Naming Rules:

1. **Use meaningful names**: Choose class and ID names that describe the purpose or content of the element they represent.

2. **Follow BEM convention**: BEM (Block Element Modifier) is a popular naming convention in CSS. It involves dividing the UI into independent blocks (components), elements, and modifiers. 
   
   - **Block**: The standalone entity that is meaningful on its own. For example, `.header`.
   - **Element**: A part of the block that has no standalone meaning and is semantically tied to its block. For example, `.header__logo`.
   - **Modifier**: A flag on a block or element. Use them to change appearance or behavior. For example, `.header--dark`.

3. **Use lowercase letters**: Although CSS is case-insensitive, it's a good practice to use lowercase letters for class and ID names to enhance readability and consistency.

4. **Separate words with hyphens (-)**: Use hyphens to separate words in class and ID names, rather than spaces or underscores. For example, `header-container` instead of `header_container` or `header container`.

5. **Avoid using generic names**: Names like 'box', 'left', 'right' can be too generic and might lead to conflicts later. Be specific and descriptive.

6. **Keep it concise**: While being descriptive, try to keep class names relatively short and to the point.

### Example:
```javascript
import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <header className="header">
      {/* Header content */}
      <div className="header__logo">
        {/* Logo content */}
      </div>
    </header>
  );
}

export default Header;

```
```css
/* Using BEM convention */
.header {
    /* styles for header block */
}

.header__logo {
    /* styles for logo element inside header */
}

.header--dark {
    /* modifier class for dark theme header */
}
```
These rules will help us maintain a clean and consistent codebase.