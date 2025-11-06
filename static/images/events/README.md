# Event Images Guidelines

To ensure optimal performance of the website, please follow these guidelines when adding new event images:

## Image Format

- Prefer **JPG format** for event images with photographs or complex scenes
- Use **PNG format** only when transparency or pixel-perfect reproduction is required
- SVG format is ideal for logos or simple vector graphics

## Image Dimensions

The recommended dimensions for event images are:
- **Width: 540px** (maximum)
- **Height: proportional** (aspect ratio maintained)

## File Size

- Target file size: **Less than 50KB**
- Maximum acceptable file size: **100KB**

## Optimization Process

Before uploading new images:

1. Resize large images to max 540px width
2. Convert PNG to JPG when appropriate (unless transparency is needed)
3. Optimize with compression tools
   - Online: [TinyPNG](https://tinypng.com/), [Squoosh](https://squoosh.app/)
   - Command line: `convert input.png -resize 540x -quality 80 output.jpg`

## Command Line Example

Using ImageMagick to optimize an image:

```bash
convert large-image.png -resize 540x -quality 80 optimized-image.jpg
```

## Batch Processing Example

```bash
# Convert and resize all PNGs in current directory to optimized JPGs
for file in *.png; do
  convert "$file" -resize 540x -quality 80 "${file%.png}.jpg"
done
```

## Note About Original PNG Files

After converting PNG files to optimized JPGs, the original PNG files can be safely removed to save repository space. As part of issue #424, we were able to reduce the total image size from 57MB to 4.9MB (91% reduction).

To remove the original PNG files after confirming the JPGs work correctly:

```bash
git rm path/to/original_file.png
git commit -m "Remove original PNG that has been converted to optimized JPG"
```

This guidance was created as part of issue #424 to improve page load performance.