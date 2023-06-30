import React from 'react';

const TextTruncate = ({ text, maxLength, className }) => {
  if (text.length <= maxLength) {
    return <span className={className}>{text}</span>;
  }

  const truncatedText = text.split(' ').slice(0, maxLength).join(' ');

  return <span>{truncatedText}...</span>;
};

export default TextTruncate;
