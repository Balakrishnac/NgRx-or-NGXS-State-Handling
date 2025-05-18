# Shopping Cart Application

This is a shopping cart application built using Angular and NgRx/NGXS for state management. The application allows users to add, remove, and update items in their shopping cart, while also providing a seamless user experience through state persistence and lazy loading.

## Features

- Add, remove, and update items in the shopping cart.
- Calculate total price and item count using selectors.
- Persist cart state to localStorage for a better user experience.
- Lazy-loaded modules for optimized performance.

## Project Structure

```
shopping-cart-app
├── src
│   ├── app
│   │   ├── app.module.ts          # Root module of the application
│   │   ├── app.component.ts       # Main component of the application
│   │   └── app.component.html     # HTML template for the main component
│   ├── cart
│   │   ├── actions
│   │   │   └── cart.actions.ts    # Action creators for the shopping cart
│   │   ├── reducers
│   │   │   └── cart.reducer.ts     # Reducer for managing cart state
│   │   ├── selectors
│   │   │   └── cart.selectors.ts   # Selectors for deriving cart data
│   │   ├── effects
│   │   │   └── cart.effects.ts     # Side effects related to the cart
│   │   ├── services
│   │   │   └── cart.service.ts     # Service for cart operations
│   │   ├── components
│   │   │   ├── cart-item.component.ts  # Component for individual cart items
│   │   │   └── cart-item.component.html # Template for cart item component
│   │   └── cart.module.ts          # Module bundling all cart-related features
│   ├── shared
│   │   ├── models
│   │   │   └── cart-item.model.ts   # Model representing cart items
│   │   └── services
│   │       └── local-storage.service.ts # Service for localStorage operations
├── angular.json                     # Angular workspace configuration
├── package.json                     # npm configuration
├── tsconfig.json                   # TypeScript configuration
└── README.md                        # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd shopping-cart-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the application:
   ```
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200`.

## Usage

- Users can add items to the cart by clicking the "Add to Cart" button.
- The cart displays the total price and item count dynamically.
- Users can update item quantities or remove items from the cart.
- The cart state is saved in localStorage, so it persists across page refreshes.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.