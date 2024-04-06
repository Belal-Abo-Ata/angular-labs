import { Component } from '@angular/core';

@Component({
	selector: 'app-photo',
	standalone: true,
	imports: [],
	templateUrl: './photo.component.html',
	styleUrl: './photo.component.css',
})
export class PhotoComponent {
	photos: string[] = ['8.jpg', '9.jpg', '10.jpg', '14.jpg', '16.jpg'];
	photoIndex: number = 0;
	photo: string = `assets/${this.photos[this.photoIndex]}`;
	interval: any;

	changePhoto(method: string): void {
		switch (method) {
			case 'increase': {
				this.photoIndex++;
         this.setPhoto(this.photos.length - 1, 0)
				break;
			}
			case 'slide': {
				this.interval = setInterval(() => {
					this.photoIndex++;
          this.setPhoto(0, this.photos.length - 1)
				}, 500);
				break;
			}
      case 'stop': {
        clearInterval(this.interval);
        break;
      }
			default: {
				this.photoIndex--;
         this.setPhoto(this.photos.length - 1, 0)
				break;
			}
		}
	}

	setPhoto(start: number, end: number): void {
		if (this.photoIndex > this.photos.length - 1) this.photoIndex = start;
		if (this.photoIndex < 0) this.photoIndex = end;
		this.photo = `assets/${this.photos[this.photoIndex]}`;
	}
}
