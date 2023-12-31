export class ImageLoader {
	static async fromURL(url: string) {
		const res = await fetch(url);
		const blob = await res.blob();
		return createImageBitmap(blob);
	}
}
