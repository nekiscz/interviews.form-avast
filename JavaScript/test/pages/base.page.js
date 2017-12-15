export default class Base {
    get loremipsum() { return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique ante nisl, nec iaculis mi euismod sed. Ut tempus ligula ut tristique eleifend. Curabitur vel augue feugiat, iaculis nunc ut, lobortis sem. Quisque aliquam suscipit lacinia. Nam eget ipsum auctor nisi efficitur sodales non in mauris. Aenean quam ligula, pellentesque id metus vitae, volutpat sollicitudin sapien. Curabitur maximus nisi erat, vitae facilisis urna mattis eget. Proin consequat ultricies neque nec tincidunt. Nam lobortis vitae ante id pretium. Sed eget ornare nunc. Aliquam lorem lacus, porta a velit ac, pulvinar dignissim nibh." }

    /**
     * gets random number between limits
     * @param {Number} min 
     * @param {Number} max 
     */
    getRandomNumber(min, max) {
        return Math.floor(Math.random() * max) + min;
    }

    /**
     * generates random string from a-Z and 0-9 
     * @param {Number} length 
     */
    getRandomString(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
}