#!/usr/bin/env ts-node

import path from 'path';
import fs from 'fs';

(async () => {
    try {
        // 1. Resolve the path to react-icons in node_modules
        const reactIconsPath = path.resolve(
            process.cwd(),
            'node_modules',
            'react-icons'
        );

        // 2. Get all subfolders in react-icons (e.g. ai, bi, bs, etc.)
        const subfolders = fs
            .readdirSync(reactIconsPath, { withFileTypes: true })
            .filter((item) => item.isDirectory())
            .map((dirEnt) => dirEnt.name);

        // 3. Object to hold the final results
        const iconsBySet: Record<string, string[]> = {};

        // 4. For each subfolder, try reading the index.d.ts file
        for (const folder of subfolders) {
            const indexDTSPath = path.join(
                reactIconsPath,
                folder,
                'index.d.ts'
            );

            // Skip if index.d.ts doesn't exist
            if (!fs.existsSync(indexDTSPath)) {
                continue;
            }

            // Read the index.d.ts file
            const fileContent = fs.readFileSync(indexDTSPath, 'utf8');

            // Regex to find all exports like:
            // export declare const AiFillAccountBook: IconType;
            const iconRegex = /export declare const (\w+)\s*:\s*IconType/g;

            const iconNames: string[] = [];
            let match: RegExpExecArray | null;
            while ((match = iconRegex.exec(fileContent)) !== null) {
                iconNames.push(match[1]);
            }

            // Store them in the result
            iconsBySet[folder] = iconNames;
        }

        // 5. Optionally, write to a JSON file in your src folder
        const outputPath = path.join(process.cwd(), 'src', 'icons.json');
        fs.writeFileSync(outputPath, JSON.stringify(iconsBySet, null, 2));

        console.log(`Icons map written to ${outputPath}`);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
})();
