'use client';
import { useParams } from 'next/navigation'
import { JarbasFormDomainsCollections } from '@jarbas/libs/firebase';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { IFormInterface } from '@jarbas/interfaces/IFormInterface';

export default function Page() {
  const [formDomain, setFormDomain] = useState<IFormInterface | null>(null);

  const params = useParams<{ id: string }>();

  useEffect(() => {

    async function getFormDomain() {
      if (params.id) {
        const docRef = doc(JarbasFormDomainsCollections, params.id);

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setFormDomain({
            ...data,
            sub: docSnap.id
          });
        }
        else {
          window.location.href = '/404';
        }
      }
    }

    getFormDomain();
  }, [params.id]);

  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
}
