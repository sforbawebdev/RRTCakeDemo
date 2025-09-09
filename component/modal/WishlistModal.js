"use client";
import Link from 'next/link';
import { Modal } from 'react-bootstrap';
import { useContext, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { VerdaContext } from '@/context/VerdaContext';
import WishlistItemTable from '../wishlist/WishlistItemTable';

const WishlistModal = ({ wishlistArray, removeItem }) => {
  const { showWishlist, handleWishlistClose, addWishlistToCart } = useContext(VerdaContext);
  const pathname = usePathname();
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (prevPath.current !== pathname && showWishlist) {
      handleWishlistClose();
    }
    prevPath.current = pathname;
  }, [pathname, showWishlist, handleWishlistClose]);

  return (
    <Modal show={showWishlist} onHide={handleWishlistClose} className="cart-area cart-area-modal fz-wishlist-modal" id="wishlist-modal-area" size="xl" centered>
      <Modal.Header className="cart__header">
        <h3 className="cart__title">Your Wishlist</h3>
        <button className="cart-area-modal-close-btn" onClick={handleWishlistClose}>
          <i className="fa-regular fa-xmark"></i>
        </button>
      </Modal.Header>

      <Modal.Body className="cart__body">
        <WishlistItemTable wishlistArray={wishlistArray} removeItem={removeItem} />

        {wishlistArray.length === 0 ? (
          <div className="cart-left-actions d-flex justify-content-end">
            <Link href="/shop" className="fz-1-banner-btn update-cart-btn">Go to Shop</Link>
          </div>
        ) : (
          <div className="cart-left-actions d-flex justify-content-between">
            <Link href="/wishlist" className="fz-1-banner-btn update-cart-btn">Go to Wishlist</Link>
            <button className="fz-1-banner-btn update-cart-btn" onClick={addWishlistToCart}>Add to Cart</button>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default WishlistModal;
