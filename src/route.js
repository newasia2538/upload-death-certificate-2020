import UploadImagePage from './components/UploadImagePage.vue';
import ResultImagePage from './components/ResultImagePage.vue';

export const routes = [
    { path : '', component : UploadImagePage},
    { name : 'result', path : '/result-image/:imagePath', component : ResultImagePage, props: {default: true}}
]