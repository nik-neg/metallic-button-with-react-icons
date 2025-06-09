import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SMetallicButton } from './MetallicButton.styles';

import * as AntIcons from 'react-icons/ai';
import * as BootstrapIcons from 'react-icons/bs';
import * as BoxIcons from 'react-icons/bi';
import * as CircumIcons from 'react-icons/ci';
import * as CssIcons from 'react-icons/cg';
import * as DevIcons from 'react-icons/di';
import * as FeatherIcons from 'react-icons/fi';
import * as FlatColorIcons from 'react-icons/fc';
import * as GameIcons from 'react-icons/gi';
import * as GithubIcons from 'react-icons/go';
import * as GrommetIcons from 'react-icons/gr';
import * as Heroicons from 'react-icons/hi';
import * as Heroicons2 from 'react-icons/hi2';
import * as IcoMoonIcons from 'react-icons/im';
import * as Ionicons5 from 'react-icons/io5';
import * as LucideIcons from 'react-icons/lu';
import * as MaterialIcons from 'react-icons/md';
import * as RadixIcons from 'react-icons/rx';
import * as RemixIcons from 'react-icons/ri';
import * as SimpleIcons from 'react-icons/si';
import * as SimpleLineIcons from 'react-icons/sl';
import * as TablerIcons from 'react-icons/tb';
import * as ThemifyIcons from 'react-icons/ti';
import * as VSCodeIcons from 'react-icons/vsc';
import * as WeatherIcons from 'react-icons/wi';
import { SEARCH_LENGTH_MAX } from './constants';

const meta: Meta<typeof SMetallicButton> = {
    component: SMetallicButton,
    title: 'Components/MetallicButton',
    decorators: [
        (Story) => (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    width: '100%',
                    background: '#000000',
                    padding: '2rem',
                }}
            >
                <Story />
            </div>
        ),
    ],
    argTypes: {
        width: {
            control: 'text',
            description: 'Width of the button',
        },
        height: {
            control: 'text',
            description: 'Height of the button',
        },
        shouldShine: {
            control: 'boolean',
            description: 'Whether the button should have the shine effect on hover',
        },
        shineColor: {
            control: 'color',
            description: 'Color of the shine effect',
        },
        shineSpeed: {
            control: { type: 'range', min: 0.5, max: 3, step: 0.1 },
            description: 'Speed of the shine animation in seconds',
        },
        children: {
            control: 'text',
            description: 'Button content',
        },
        iconSize: {
            control: 'number',
            description: 'Size of the icon in pixels',
        },
        iconColor: {
            control: 'color',
            description: 'Color of the icon',
        },
        onClick: { action: 'clicked' },
    },
};

export default meta;
type Story = StoryObj<typeof SMetallicButton>;

const iconSeries = [
    { name: 'Ant Design Icons', icons: AntIcons, count: 831 },
    { name: 'Bootstrap Icons', icons: BootstrapIcons, count: 2716 },
    { name: 'BoxIcons', icons: BoxIcons, count: 1634 },
    { name: 'Circum Icons', icons: CircumIcons, count: 288 },
    { name: 'css.gg', icons: CssIcons, count: 704 },
    { name: 'Devicons', icons: DevIcons, count: 192 },
    { name: 'Feather', icons: FeatherIcons, count: 287 },
    { name: 'Flat Color Icons', icons: FlatColorIcons, count: 329 },
    { name: 'Game Icons', icons: GameIcons, count: 4040 },
    { name: 'Github Octicons', icons: GithubIcons, count: 264 },
    { name: 'Grommet-Icons', icons: GrommetIcons, count: 635 },
    { name: 'Heroicons', icons: Heroicons, count: 460 },
    { name: 'Heroicons 2', icons: Heroicons2, count: 972 },
    { name: 'IcoMoon Free', icons: IcoMoonIcons, count: 491 },
    { name: 'Ionicons 5', icons: Ionicons5, count: 1332 },
    { name: 'Lucide', icons: LucideIcons, count: 1541 },
    { name: 'Material Design icons', icons: MaterialIcons, count: 4341 },
    { name: 'Radix Icons', icons: RadixIcons, count: 318 },
    { name: 'Remix Icon', icons: RemixIcons, count: 3020 },
    { name: 'Simple Icons', icons: SimpleIcons, count: 3275 },
    { name: 'Simple Line Icons', icons: SimpleLineIcons, count: 189 },
    { name: 'Tabler Icons', icons: TablerIcons, count: 5754 },
    { name: 'Themify Icons', icons: ThemifyIcons, count: 352 },
    { name: 'VS Code Icons', icons: VSCodeIcons, count: 466 },
    { name: 'Weather Icons', icons: WeatherIcons, count: 219 },
];

export const ReactIconsSearch: Story = {
    render: () => {
        const [searchTerm, setSearchTerm] = useState('');
        const [selectedSeries, setSelectedSeries] = useState(iconSeries[0]);
        const [selectedIcon] = useState('');

        const filteredIcons = Object.keys(selectedSeries.icons)
            .filter((name) => name.toLowerCase().includes(searchTerm.toLowerCase()))
            .slice(0, SEARCH_LENGTH_MAX);

        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <select
                        value={selectedSeries.name}
                        onChange={(e) => {
                            const series = iconSeries.find((s) => s.name === e.target.value);
                            if (series) setSelectedSeries(series);
                        }}
                        style={{
                            padding: '0.5rem',
                            borderRadius: '4px',
                            backgroundColor: '#333',
                            color: 'white',
                            border: '1px solid #666',
                            minWidth: '200px',
                        }}
                    >
                        {iconSeries.map((series) => (
                            <option key={series.name} value={series.name}>
                                {series.name} ({series.count} icons)
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search icons..."
                        style={{
                            padding: '0.5rem',
                            borderRadius: '4px',
                            backgroundColor: '#333',
                            color: 'white',
                            border: '1px solid #666',
                            flex: 1,
                        }}
                    />
                </div>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    {filteredIcons.map((iconName) => {
                        const Icon = selectedSeries.icons[iconName as keyof typeof selectedSeries.icons];
                        return (
                            <SMetallicButton key={iconName} icon={Icon} iconSize={24} shouldShine={true}>
                                <Icon size={24} />
                            </SMetallicButton>
                        );
                    })}
                </div>
                {selectedIcon && (
                    <div style={{ textAlign: 'center', color: 'white' }}>
                        Selected Icon: {selectedIcon} from {selectedSeries.name}
                    </div>
                )}
            </div>
        );
    },
};
