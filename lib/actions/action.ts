'use server'

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { db } from '../firebase/firebase'

export const addPaket = async (formData: FormData) => {
  const collectionRef = collection(db, 'listpaket')

  const docRef = await addDoc(collectionRef, {
    durasi_program: formData.get('durasi_program'),
    // gambar: formData.get('gambar'),
    harga: formData.get('harga'),
    judul_program: formData.get('judul_program'),
    list_benefit: (formData.get('list_benefit') as string)
      .split(',')
      .map((benefit) => benefit.trim()),
    periode_program: formData.get('periode_program'),
  })

  revalidatePath('/admin-page')
}

export const updatePaket = async (formData: FormData, paketId: string) => {
  const docRef = doc(db, 'listpaket', paketId)

  await updateDoc(docRef, {
    durasi_program: formData.get('durasi_program'),
    gambar: formData.get('gambar'),
    harga: formData.get('harga'),
    judul_program: formData.get('judul_program'),
    list_benefit: (formData.get('list_benefit') as string)
      .split(',')
      .map((benefit) => benefit.trim()),
    periode_program: formData.get('periode_program'),
  })

  revalidatePath('/admin-page')
}

export const deletePaket = async (paketId: string) => {
  const docRef = doc(db, 'listpaket', paketId)

  await deleteDoc(docRef)
  revalidatePath('/admin-page')
}
