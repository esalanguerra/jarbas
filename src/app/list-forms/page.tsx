'use client';

import { JarbasFormDomainsCollections } from '@jarbas/libs/firebase';
import { useEffect, useState } from 'react';
import { getDocs } from 'firebase/firestore';
import { IFormInterface } from '@jarbas/interfaces/IFormInterface';

export default function ListForms() {
  const [formDomains, setFormDomains] = useState<IFormInterface[]>([]);

  useEffect(() => {
    async function getFormDomains() {
      const formDomains = await getDocs(JarbasFormDomainsCollections);

      const formDomainsData = formDomains.docs.map(doc => {
        return {
          ...doc.data(),
          sub: doc.id
        };
      });

      setFormDomains(formDomainsData);
    }

    getFormDomains();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {
            formDomains.map(formDomain => (
              <tr key={formDomain.sub}>
                <td>{formDomain.title}</td>
                <td>{formDomain.description}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}
