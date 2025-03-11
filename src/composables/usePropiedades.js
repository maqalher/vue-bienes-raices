import { ref, computed } from "vue";
import { collection, doc, deleteDoc } from "firebase/firestore";
// import { ref as storegeRef, deleteObject } from "firebase/storage";
import { 
    useFirestore, 
    useCollection, 
    // useFirebaseStorage // Eliminar imagen
} from "vuefire";

export default function usePropiedades() {

    const alberca = ref(false)

    // const storage = useFirebaseStorage() // Referencia del objeto de la imagen pata eliminar imagen
    const db = useFirestore()
    const propiedadesCollection = useCollection(collection(db, 'propiedades'))

    async function deleteItem(id, urlImagen){
        if(confirm('Deseas eliminar esta propiedad?')){
            const docRef = doc(db, 'propiedades', id)
            // const imageRef = storegeRef(storage, urlImagen) // Eliminar imagen

            await deleteDoc(docRef)

            // Eliminar con una sola peticion
            // await Promise.all([
            //     deleteDoc(docRef),
            //     deleteObject(imageRef) // Eliminar imagen
            // ])
        }
        
    }

    const filteredItems = computed(() => {
        return alberca.value ?
            propiedadesCollection.value.filter( propiedad => propiedad.alberca) :
            propiedadesCollection.value
    })

    return {
        propiedadesCollection,
        alberca, 
        filteredItems,
        deleteItem
    }

}