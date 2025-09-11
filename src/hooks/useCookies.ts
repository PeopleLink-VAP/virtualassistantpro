import { useState, useEffect } from 'react';

export interface CookieData {
  [key: string]: string;
}

export const useCookies = () => {
  // Cookie utility functions
  const setCookie = (name: string, value: string, days: number = 365) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };

  const getCookie = (name: string): string | null => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  const deleteCookie = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  // Newsletter registration utilities
  const getNewsletterData = () => {
    const email = getCookie('vap_newsletter_email');
    const date = getCookie('vap_newsletter_date');
    const source = getCookie('vap_newsletter_source');
    
    return {
      email,
      date,
      source,
      isRegistered: !!(email && date)
    };
  };

  const setNewsletterData = (email: string, source: string = 'newsletter_form') => {
    setCookie('vap_newsletter_email', email);
    setCookie('vap_newsletter_date', new Date().toISOString());
    setCookie('vap_newsletter_source', source);
  };

  // Course registration utilities
  const getCourseData = () => {
    const fullName = getCookie('vap_course_fullName');
    const email = getCookie('vap_course_email');
    const phone = getCookie('vap_course_phone');
    const date = getCookie('vap_course_date');
    const source = getCookie('vap_course_source');
    
    return {
      fullName,
      email,
      phone,
      date,
      source,
      isRegistered: !!(fullName && email && phone && date)
    };
  };

  const setCourseData = (fullName: string, email: string, phone: string, source: string = 'course_registration') => {
    setCookie('vap_course_fullName', fullName);
    setCookie('vap_course_email', email);
    setCookie('vap_course_phone', phone);
    setCookie('vap_course_date', new Date().toISOString());
    setCookie('vap_course_source', source);
  };

  return {
    setCookie,
    getCookie,
    deleteCookie,
    getNewsletterData,
    setNewsletterData,
    getCourseData,
    setCourseData
  };
};