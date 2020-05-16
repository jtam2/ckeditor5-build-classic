/* eslint-disable no-alert */
/* eslint-disable no-undef */
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export class InsertImage extends Plugin {
	init() {
		const editor = this.editor;
		editor.ui.componentFactory.add( 'insertImage', locale => {
			const view = new ButtonView( locale );
			view.set( {
				label: 'Insert image',
				icon: imageIcon,
				tooltip: true
			} );

			view.on( 'execute', () => {
				const imageURL = prompt( 'Image URL' );
				editor.model.change( writer => {
					const imageElement = writer.createElement( 'image', {
						src: imageURL
					} );
					console.log( editor.model.insertContent( imageElement, editor.model.document.selection ) );
				} );
			} );
			return view;
		} );
	}
}
// https://i.imgur.com/hmRsNDP.png
