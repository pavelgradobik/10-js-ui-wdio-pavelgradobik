export class TopMenuComponents{
    
    private get root(): WebdriverIO.Element {
        return $('.navbar-nav');
    }
    
    get mp3PlayersMenuButton(){
        return this.root.$('a[href*=mp3-players][data-toggle="dropdown"]');
    }

    get openAllMp3PlayersList(){
        return this.root.$('.navbar-nav a[href*=mp3-players][class="see-all"]');
    }
}