import React from 'react';
import { Link } from 'react-router-dom';

const PluginSection = () => {
  return (
    <div className="flex flex-wrap max-w-6xl mx-auto justify-center md:gap-6 gap-3">
      <Link className="hover:bg-white rounded-2xl md:p-6 p-3" to="/plugins/wix">
        <img 
          decoding="async" 
          src="https://cdn.coingate.com/uploads/2023/09/10064126/Wixx-1.png" 
          alt="Wix" 
          className="md:w-[144px] w-[124px] md:h-[72px] h-[62px] object-cover object-center" 
        />
      </Link>
      <Link className="hover:bg-white rounded-2xl md:p-6 p-3" to="/plugins/woocommerce">
        <img 
          decoding="async" 
          src="https://cdn.coingate.com/uploads/2023/09/10064126/Woo-1.png" 
          alt="WooCommerce" 
          className="md:w-[144px] w-[124px] md:h-[72px] h-[62px] object-cover object-center" 
        />
      </Link>
      <a className="hover:bg-white rounded-2xl md:p-6 p-3" href="https://github.com/coingate/magento2-plugin" target="_blank" rel="noopener noreferrer">
        <img 
          decoding="async" 
          src="https://cdn.coingate.com/uploads/2023/09/10064126/Magento2-1.png" 
          alt="Magento 2" 
          className="md:w-[144px] w-[124px] md:h-[72px] h-[62px] object-cover object-center" 
        />
      </a>
      <Link className="hover:bg-white rounded-2xl md:p-6 p-3" to="/plugins/whmcs">
        <img 
          decoding="async" 
          src="https://cdn.coingate.com/uploads/2023/09/10064126/WHMCS-2.png" 
          alt="WHMCS" 
          className="md:w-[144px] w-[124px] md:h-[72px] h-[62px] object-cover object-center" 
        />
      </Link>
      <Link className="hover:bg-white rounded-2xl md:p-6 p-3" to="/plugins/opencart">
        <img 
          decoding="async" 
          src="https://cdn.coingate.com/uploads/2023/09/10064126/opencart-1.png" 
          alt="OpenCart" 
          className="md:w-[144px] w-[124px] md:h-[72px] h-[62px] object-cover object-center" 
        />
      </Link>
      <div className="hover:bg-white rounded-2xl md:p-6 p-3">
        <img 
          decoding="async" 
          src="https://cdn.coingate.com/uploads/2023/09/10064127/eshoprent-1.png" 
          alt="eshoprent" 
          className="md:w-[144px] w-[124px] md:h-[72px] h-[62px] object-cover object-center" 
        />
      </div>
      <Link className="hover:bg-white rounded-2xl md:p-6 p-3" to="/plugins/prestashop">
        <img 
          decoding="async" 
          src="https://cdn.coingate.com/uploads/2024/03/10063727/PrestaShop-Image.png" 
          alt="PrestaShop" 
          className="md:w-[144px] w-[124px] md:h-[72px] h-[62px] object-cover object-center" 
        />
      </Link>
    </div>
  );
};

export default PluginSection;
