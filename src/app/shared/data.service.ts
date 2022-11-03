import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Plat } from '../model/Plat';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore, private fireStorage: AngularFireStorage) { }
  // add Plat
  addPlat(plat: Plat) {
    plat.id = this.afs.createId();
    return this.afs.collection('/Plat').add(plat);
  }
  // get Plat
  getAllPlats() {
    return this.afs.collection('/Plat').snapshotChanges();
  }
  // delete Plat
  deletePlat(plat: Plat) {
    return this.afs.collection('/Plat').doc(plat.id).delete();
  }
  // update Plat
  updatePlat(plat: Plat) {
    this.deletePlat(plat);
    this.addPlat(plat);
  }

  getPlatById(id: string) {
    return this.afs.collection('/Plat').doc(id).get();
  }
}
