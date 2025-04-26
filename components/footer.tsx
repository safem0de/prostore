const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className='border-t'>
        <div className='p-5 flex-center'>
          {currentYear} Safem0de. All Rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;