import React from 'react';

interface LogoProps {
  setBlack: boolean,
}
const Logo = ({ setBlack }: LogoProps) => (
  <>
    { setBlack
      ? (
        <svg width="72" height="56" viewBox="0 0 72 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M65.9264 21.7241H0C0.861783 33.1494 8.53165 56 32.3169 56C56.1021 56 64.6338 33.1494 65.9264 21.7241Z" fill="#3E4347" />
          <path d="M50.5529 19.7896C44.3099 20.5035 42.7492 25.5607 42.7492 28H52.699C54.845 25.8581 53.3185 20.9191 54.4548 20.325C55.8205 19.6111 63.8193 11.4007 66.1605 6.75998C68.5016 2.11931 69.477 4.26115 70.6476 3.01174C71.3658 2.24514 71.2329 0.691404 69.8672 0.155941C68.7747 -0.272429 67.329 0.155948 66.5506 1.76232C63.7543 7.53341 56.7959 19.0756 50.5529 19.7896Z" fill="#3E4347" />
        </svg>
      )
      : (
        <svg width="72" height="56" viewBox="0 0 72 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M65.9264 21.7241H0C0.861783 33.1494 8.53165 56 32.3169 56C56.1021 56 64.6338 33.1494 65.9264 21.7241Z" fill="white" />
          <path d="M50.5529 19.7896C44.3099 20.5035 42.7492 25.5607 42.7492 28H52.699C54.845 25.8581 53.3185 20.9191 54.4548 20.325C55.8205 19.6111 63.8193 11.4007 66.1605 6.75998C68.5016 2.11931 69.4771 4.26115 70.6476 3.01174C71.3658 2.24514 71.2329 0.691404 69.8672 0.155941C68.7747 -0.272429 67.329 0.155948 66.5506 1.76232C63.7543 7.53341 56.7959 19.0756 50.5529 19.7896Z" fill="white" />
        </svg>
      )}
  </>
);

export default Logo;