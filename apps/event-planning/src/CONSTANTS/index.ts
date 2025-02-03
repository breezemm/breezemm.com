// dummy-data-photo
import aChanPyae from '../dummy-data-photo/a-chan-pyae.png';
import arenaEventPhoto from '../dummy-data-photo/arena-event-photo.png';
import arenaPhoto from '../dummy-data-photo/arena-photo.png';
import breezeEventPhoto from '../dummy-data-photo/breeze-event-photo.png';
import eventIcon from '../icons/app-navigation-icons/event-icon.svg';
// app navigation
import homeIcon from '../icons/app-navigation-icons/home-icon.svg';
import notificationIcon from '../icons/app-navigation-icons/notification-icon.svg';
import searchIcon from '../icons/app-navigation-icons/search-icon.svg';
import userProfileIcon from '../icons/app-navigation-icons/user-profile-icon.svg';
import appleAppStoreIcon from '../icons/app-store-icons/apple-store.svg';
import googlePlayStoreIcon from '../icons/app-store-icons/google-play-store.svg';
import emailIcon from '../icons/contact-icons/email-icon.svg';
import phoneIcon from '../icons/contact-icons/phone-icon.svg';
import webIcon from '../icons/contact-icons/web-icon.svg';
// social media
import facebookIcon from '../icons/social-media-icons/facebook-icon.svg';
import instagramIcon from '../icons/social-media-icons/instagram.svg';
import linkedInIcon from '../icons/social-media-icons/linkedin.svg';
import telegramIcon from '../icons/social-media-icons/telegram.svg';
import tiktokIcon from '../icons/social-media-icons/tiktok.svg';

export const contactInfo = [
  { icon: webIcon, text: 'breezemm.com' },
  { icon: phoneIcon, text: '09-443 111 017' },
  { icon: emailIcon, text: 'care@breezemm.com' },
];

export const socialMedias = [facebookIcon, instagramIcon, linkedInIcon, tiktokIcon, telegramIcon];

export const appStoreIcons = [
  { src: appleAppStoreIcon, alt: 'apple app store icon' },
  { src: googlePlayStoreIcon, alt: 'google play store icon' },
];

export const appNavigation = [
  { iconSrc: homeIcon, alt: 'home icon', href: '' },
  { iconSrc: searchIcon, alt: 'search icon', href: '' },
  { iconSrc: eventIcon, alt: 'event icon', href: '' },
  { iconSrc: notificationIcon, alt: 'notification icon', href: '' },
  { iconSrc: userProfileIcon, alt: 'user profile icon', href: '' },
];

export const POST_DUMMY_DATA = [
  {
    id: '30',
    name: 'breeze PUBLIC Launch',
    start_date: '1 Mar (Tue)',
    status: 'FREE',
    description: 'breeze is finally OUT OF THE LAB.',
    image: breezeEventPhoto,
    user: {
      id: '11',
      nickname: 'A Chan Pyae',
      profile_image: aChanPyae,
      time: '5m',
    },
    like_count: '1000',
    friend_comment: true,
    comment_count: '68',
  },
  {
    id: '29',
    name: 'ARENA NIGHT',
    start_date: '16 Mar (Fri)',
    status: 'PAID',
    description: '',
    image: arenaEventPhoto,
    user: {
      id: '32',
      nickname: 'ARENA Entertainment',
      time: '20m',
      profile_image: arenaPhoto,
    },
    like_count: '86',
    comment_count: '100',
    friend_comment: false,
  },
];
