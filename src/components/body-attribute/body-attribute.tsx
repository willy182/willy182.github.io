import { useEffect } from 'react';

interface BodyAttributesProps {
  attributes: Array<{ name: string; value: string }>;
}

export const BodyAttributes = ({ attributes }: BodyAttributesProps) => {
  useEffect(() => {
    // Menambahkan atribut ke tag <body>
    attributes.forEach(({ name, value }) => {
      document.body.setAttribute(name, value);
    });

    // Membersihkan atribut saat komponen di-unmount
    return () => {
      attributes.forEach(({ name }) => {
        document.body.removeAttribute(name);
      });
    };
  }, [attributes]);

  return null; // Komponen ini tidak merender apa pun ke DOM
};