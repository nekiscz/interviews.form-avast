class Registration {
    get lastName() { return $("[name='last_name']"); }
    get firstName() { return $("[name='first_name']"); }

    open() {
        browser.url('/registration')
    }
}

export default new Registration();