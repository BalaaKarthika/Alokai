
// import React, { useState } from 'react';
// import { useCart } from "../Context/CartContext"; 
// import { SfButton, SfIconRemove, SfLink, SfIconAdd, SfIconDelete, SfIconCheckCircle } from '@storefront-ui/react';
// import { useId } from 'react';

// const MyCart = () => {
//   const { cartItems, removeFromCart, updateQuantity } = useCart();
//   const inputId = useId();
//   const [message, setMessage] = useState('');
//   const [isAlertVisible, setIsAlertVisible] = useState(false);
  
//   const min = 1;
//   const max = 10;

//   const handleQuantityChange = (itemId, newQuantity) => {
//     if (newQuantity >= min && newQuantity <= max) {
//       updateQuantity(itemId, newQuantity);
//       setMessage('Cart Updated');
//       setIsAlertVisible(true);
//       setTimeout(() => {
//         setIsAlertVisible(false);
//       }, 3000);
//     }
//   };

//   return (
//     <div>
//       {isAlertVisible && (
//         <div className="fixed top-16 right-4 flex items-center bg-green-300 text-green-800 text-xs py-1 px-2 rounded-md shadow-lg z-50">
//           <SfIconCheckCircle className="mr-2" size="sm" />
//           <span>{message}</span>
//         </div>
//       )}
//       {cartItems.length === 0 ? (
//        <div className="text-center py-10 flex flex-col items-center justify-center">
//        <h2 className="text-xl font-semibold text-gray-700">Your cart is empty</h2>
//        <p className="text-gray-500 mt-2">Add items to your cart to get started!</p>
//        <img src="/empty-cart.1fad620a.svg" alt="" className="w-36 h-auto mt-5" />
//      </div>
//       ) : (
//         cartItems.map((item) => (
//           <div key={item.id} className="relative flex border-b-[1px] border-neutral-200 hover:shadow-lg min-w-[320px] max-w-[640px] p-4">
//             <div className="relative overflow-hidden rounded-md w-[100px] sm:w-[176px]">
//               <SfLink href="#">
//                 <img
//                   className="w-full h-auto border rounded-md border-neutral-200"
//                   src={item.image}
//                   alt={item.title}
//                   width="300"
//                   height="300"
//                 />
//               </SfLink>
//             </div>
//             <div className="flex flex-col pl-4 min-w-[180px] flex-1">
//               <SfLink href="#" variant="secondary" className="no-underline typography-text-sm sm:typography-text-lg">
//                 {item.title}
//               </SfLink>
//               <div className="my-2 sm:mb-0">
//                 <ul className="text-xs font-normal leading-5 sm:typography-text-sm text-neutral-700">
//                   <li>
//                     <span className="mr-1">Price:</span>
//                     <span className="font-medium">${item.price}</span>
//                   </li>
//                   <li>
//                     <span className="mr-1">Quantity:</span>
//                     <input
//                       type="number"
//                       min={min}
//                       max={max}
//                       value={item.quantity}
//                       onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
//                       className="w-16 text-center border px-2 py-1"
//                     />
//                   </li>
//                 </ul>
//               </div>
//               <div className="items-center sm:mt-auto sm:flex">
//                 <span className="font-bold sm:ml-auto sm:order-1 typography-text-sm sm:typography-text-lg">${item.price * item.quantity}</span>
//                 <div className="flex items-center justify-between mt-4 sm:mt-0">
//                   <div className="flex border border-neutral-300 rounded-md">
//                     <SfButton
//                       variant="tertiary"
//                       square
//                       className="rounded-r-none"
//                       aria-controls={inputId}
//                       aria-label="Decrease value"
//                       onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
//                     >
//                       <SfIconRemove />
//                     </SfButton>
//                     <SfButton
//                       variant="tertiary"
//                       square
//                       className="rounded-l-none"
//                       aria-controls={inputId}
//                       aria-label="Increase value"
//                       onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
//                     >
//                       <SfIconAdd />
//                     </SfButton>
//                   </div>
//                   <button
//                     aria-label="Remove"
//                     type="button"
//                     className="text-neutral-500 text-xs font-light ml-auto flex items-center px-3 py-1.5"
//                     onClick={() => removeFromCart(item.id)}
//                   >
//                     <SfIconDelete />
//                     <span className="hidden ml-1.5 sm:block"> Remove </span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default MyCart;
import React, { useState } from 'react';
import { useCart } from "../Context/CartContext"; 
import { SfButton, SfIconRemove, SfLink, SfIconAdd, SfIconDelete, SfIconCheckCircle } from '@storefront-ui/react';
import { useId } from 'react';

const MyCart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const inputId = useId();
  const [message, setMessage] = useState('');
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  
  const min = 1;
  const max = 10;

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= min && newQuantity <= max) {
      updateQuantity(itemId, newQuantity);
      setMessage('Cart Updated');
      setIsAlertVisible(true);
      setTimeout(() => {
        setIsAlertVisible(false);
      }, 3000);
    }
  };

  return (
    <div>
      {isAlertVisible && (
        <div className="fixed top-16 right-4 flex items-center bg-green-300 text-green-800 text-xs py-1 px-2 rounded-md shadow-lg z-50">
          <SfIconCheckCircle className="mr-2" size="sm" />
          <span>{message}</span>
        </div>
      )}
      {cartItems.length === 0 ? (
        <div className="text-center py-10 flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold text-gray-700">Your cart is empty</h2>
          <p className="text-gray-500 mt-2">Add items to your cart to get started!</p>
          <img src="/empty-cart.1fad620a.svg" alt="" className="w-36 h-auto mt-5" />
        </div>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="relative flex border-b-[1px] border-neutral-200 hover:shadow-lg min-w-[320px] max-w-[640px] p-4">
            <div className="relative overflow-hidden rounded-md w-[100px] sm:w-[176px]">
              <SfLink href="#">
                <img
                  className="w-full h-auto border rounded-md border-neutral-200"
                  src={item.image}
                  alt={item.title}
                  width="300"
                  height="300"
                />
              </SfLink>
            </div>
            <div className="flex flex-col pl-4 min-w-[180px] flex-1">
              <SfLink href="#" variant="secondary" className="no-underline typography-text-sm sm:typography-text-lg">
                {item.title}
              </SfLink>
              <div className="my-2 sm:mb-0">
                <ul className="text-xs font-normal leading-5 sm:typography-text-sm text-neutral-700">
                  <li>
                    <span className="mr-1">Price:</span>
                    <span className="font-medium">${item.price}</span>
                  </li>
                  <li>
                    <span className="mr-1">Quantity:</span>
                    <input
                      type="number"
                      min={min}
                      max={max}
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                      className="w-16 text-center border px-2 py-1"
                    />
                  </li>
                </ul>
              </div>
              <div className="items-center sm:mt-auto sm:flex">
                <span className="font-bold sm:ml-auto sm:order-1 typography-text-sm sm:typography-text-lg">${item.price * item.quantity}</span>
                <div className="flex items-center justify-between mt-4 sm:mt-0">
                  <div className="flex border border-neutral-300 rounded-md">
                    <SfButton
                      variant="tertiary"
                      square
                      className="rounded-r-none"
                      aria-controls={inputId}
                      aria-label="Decrease value"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      <SfIconRemove />
                    </SfButton>
                    <SfButton
                      variant="tertiary"
                      square
                      className="rounded-l-none"
                      aria-controls={inputId}
                      aria-label="Increase value"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      <SfIconAdd />
                    </SfButton>
                  </div>
                  <button
                    aria-label="Remove"
                    type="button"
                    className="text-neutral-500 text-xs font-light ml-auto flex items-center px-3 py-1.5"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <SfIconDelete />
                    <span className="hidden ml-1.5 sm:block"> Remove </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyCart;
