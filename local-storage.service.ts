class LocalStorageService {
    saveCart(cart: any): void {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    getCart(): any {
        const cart = localStorage.getItem('shoppingCart');
        return cart ? JSON.parse(cart) : null;
    }

    clearCart(): void {
        localStorage.removeItem('shoppingCart');
    }
}