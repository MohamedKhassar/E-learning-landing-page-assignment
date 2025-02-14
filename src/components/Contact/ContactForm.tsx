const ContactForm = () => {
    return (
        <div className="w-[30rem] flex p-9 items-center">
            <div className="grid place-items-center gap-y-14 ">
                <div className="grid place-items-start space-y-4">
                    <h1 className="lg:text-5xl md:text-3xl text-2xl text-center font-semibold capitalize">contact us</h1>
                    <p className="text-stone-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo alias tempore illum perferendis molestiae nisi ducimus blanditiis saepe distinctio qui.</p>
                </div>
                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                First name
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Mesum"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Last name
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Brain"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Mail
                        </label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                            value="mbc929072@gmail.com"
                            disabled
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary !w-full"
                    >
                        Get in touch
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm