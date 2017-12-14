class Registration {
    get lastName() { return browser.element("[name='last_name']"); }
    get firstName() { return browser.element("[name='first_name']"); }

    open() {
        browser.url('/registration')
    }
}

export default new Registration();