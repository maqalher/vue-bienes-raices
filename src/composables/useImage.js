import { computed, ref } from "vue";
// import { ref as storageRef } from "firebase/storage";
// import { useFirebaseStorage, useStorageFile } from "vuefire";
// import { uid } from "uid";

export default function useImage() {

    // const storage = useFirebaseStorage()
    // const storageRefPath = storageRef(storage, `/propiedades/${uid()}`)

    // const {
    //     url,
    //     upload
    // } = useStorageFile(storageRefPath)

    const url = ref('')

    function uploadImage(e) {
        // console.log(e);
        const data = e.target.files[0]
        if(data){
            // upload(data)
            
            // Parche
            const placeholder = 'https://picsum.photos/800'
            url.value = placeholder
        }
        
        
    }

    const image = computed(() => {
        return url.value ? url.value : null
    })

    return {
        url,
        uploadImage,
        image
    }
}