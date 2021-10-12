// Handle Photo Profile & Profile Name
const PHOTO_PROFILE = localStorage.getItem('photo_profile');
const PROFILE_NAME = localStorage.getItem('profile_name');

if(PHOTO_PROFILE !== null){
    $('.profile_img').attr('src', PHOTO_PROFILE);
}

if(PROFILE_NAME !== null){
    $('.profile_name').text(PROFILE_NAME);
}