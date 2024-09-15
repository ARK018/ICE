const Footer = () => {
  return (
    <footer className="flex justify-center border-t bg-white py-12 px-8">
      <div className="w-[1080px] f">
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">About Us</h3>
            <div className="space-y-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Products</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                IT Services
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Interior Design
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Fruits & Vegetables
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Spices
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Dry Fruits
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Dry Snacks
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Social</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                X
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Instagram
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="text-gray-400 text-sm">
          <p>© 2024 Intercontinental Exim</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
