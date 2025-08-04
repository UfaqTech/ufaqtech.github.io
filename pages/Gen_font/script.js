document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const fontPreviewsContainer = document.getElementById('font-previews');
    const fontSizeSlider = document.getElementById('font-size-slider');
    const fontSizeValue = document.getElementById('font-size-value');
    const categoryButtons = document.querySelectorAll('.category-btn');

    const fonts = [
        // Serif
        { name: 'Playfair Display', category: 'serif' },
        { name: 'Merriweather', category: 'serif' },
        { name: 'Lora', category: 'serif' },
        { name: 'EB Garamond', category: 'serif' },
        { name: 'Cormorant Garamond', category: 'serif' },
        // Sans-serif
        { name: 'Roboto', category: 'sans-serif' },
        { name: 'Lato', category: 'sans-serif' },
        { name: 'Montserrat', category: 'sans-serif' },
        { name: 'Open Sans', category: 'sans-serif' },
        { name: 'Source Sans Pro', category: 'sans-serif' },
        // Display
        { name: 'Lobster', category: 'display' },
        { name: 'Bungee', category: 'display' },
        { name: 'Abril Fatface', category: 'display' },
        { name: 'Anton', category: 'display' },
        { name: 'Fredoka One', category: 'display' },
        // Handwriting
        { name: 'Pacifico', category: 'handwriting' },
        { name: 'Caveat', category: 'handwriting' },
        { name: 'Sacramento', category: 'handwriting' },
        { name: 'Dancing Script', category: 'handwriting' },
        { name: 'Indie Flower', category: 'handwriting' },
        // Monospace
        { name: 'Source Code Pro', category: 'monospace' },
        { name: 'Inconsolata', category: 'monospace' },
        { name: 'Roboto Mono', category: 'monospace' },
        { name: 'Space Mono', category: 'monospace' },
        { name: 'Cutive Mono', category: 'monospace' },
    ];

    let currentCategory = 'all';
    let currentFontSize = '28px';

    function loadGoogleFonts() {
        const fontFamilies = fonts.map(font => font.name.replace(/ /g, '+')).join('|');
        const link = document.createElement('link');
        link.href = `https://fonts.googleapis.com/css?family=${fontFamilies}&display=swap`;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }

    function generatePreviews() {
        fontPreviewsContainer.innerHTML = '';
        const text = textInput.value.trim() || 'The quick brown fox jumps over the lazy dog.';
        
        const filteredFonts = fonts.filter(font => 
            currentCategory === 'all' || font.category === currentCategory
        );

        filteredFonts.forEach(font => {
            const card = document.createElement('div');
            card.className = 'font-card';

            const previewText = document.createElement('div');
            previewText.className = 'preview-text';
            previewText.style.fontFamily = `'${font.name}', ${font.category}`;
            previewText.style.fontSize = currentFontSize;
            previewText.textContent = text;
            
            const footer = document.createElement('div');
            footer.className = 'font-card-footer';

            const fontName = document.createElement('span');
            fontName.className = 'font-name';
            fontName.textContent = font.name;

            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-btn';
            copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
            
            copyBtn.addEventListener('click', () => {
                const textToCopy = previewText.textContent;
                navigator.clipboard.writeText(textToCopy).then(() => {
                    copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
                    copyBtn.classList.add('copied');
                    setTimeout(() => {
                        copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
                        copyBtn.classList.remove('copied');
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            });

            footer.appendChild(fontName);
            footer.appendChild(copyBtn);
            
            card.appendChild(previewText);
            card.appendChild(footer);

            fontPreviewsContainer.appendChild(card);
        });
    }

    textInput.addEventListener('input', generatePreviews);

    fontSizeSlider.addEventListener('input', (e) => {
        currentFontSize = `${e.target.value}px`;
        fontSizeValue.textContent = currentFontSize;
        document.querySelectorAll('.preview-text').forEach(el => {
            el.style.fontSize = currentFontSize;
        });
    });

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentCategory = button.dataset.category;
            generatePreviews();
        });
    });

    // Initial load
    loadGoogleFonts();
    generatePreviews();
});
