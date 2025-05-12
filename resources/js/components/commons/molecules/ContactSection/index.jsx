import { Link } from 'react-router-dom';

const ContactSection = () => {
    const handlerSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id="contact">
            {/* <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2'></div> */}
            <div className='z-10'>
                <h1 className='text-xl font-bold text-white my-2'>Let's Connect</h1>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                    Saya sangat senang untuk berbicara dan berkolaborasi dengan Anda. Mari berkomunikasi
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link to="https://github.com/ahmadilham13">
                        <img src="/icons/statics/github-icon.svg" alt='Github Icon'/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/ahmad-ilham-12a96b24b/">
                        <img src="/icons/statics/linkedin-icon.svg" alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>

            <div>
                <form className='flex flex-col' onSubmit={handlerSubmit}>
                    <div className='mb-6'>
                        <label htmlFor='text' typeof='text' className='text-white block text-sm mb-2 font-medium'>Your Email</label>
                        <input type='text' id='text' name='name' required placeholder='Your Name' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='subject' typeof='text' className='text-white block text-sm mb-2 font-medium'>Subject</label>
                        <input type='text' id='subject' name='subject' required placeholder='input your subject' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='message' className='text-white block text-sm mb-2 font-medium'>
                            Message
                        </label>
                        <textarea name='message' id='message' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='What Your Messages'></textarea>
                    </div>
                    <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Send Messages</button>
                </form>
            </div>
        </section>
    )
}

export default ContactSection;