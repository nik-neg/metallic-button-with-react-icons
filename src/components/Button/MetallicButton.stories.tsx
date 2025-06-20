import React, { useState, useMemo, ComponentType } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SMetallicButton, MIN_WIDTH, MIN_HEIGHT } from './index';

import * as FontAwesomeIcons from 'react-icons/fa';
import * as FontAwesome6Icons from 'react-icons/fa6';
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
            control: 'number',
            description: 'Width of the button',
        },
        height: {
            control: 'number',
            description: 'Height of the button',
        },
        $shouldShine: {
            control: 'boolean',
            description: 'Whether the button should have the shine effect on hover',
        },
        $shineColor: {
            control: 'color',
            description: 'Color of the shine effect',
        },
        $shineDuration: {
            control: { type: 'range', min: 0.5, max: 3, step: 0.1 },
            description: 'Speed of the shine animation in seconds',
        },
        children: {
            control: 'text',
            description: 'Button content',
        },
        $iconSize: {
            control: 'number',
            description: 'Size of the icon in pixels',
        },
        $iconColor: {
            control: 'color',
            description: 'Color of the icon',
        },
        onClick: { action: 'clicked' },
        $shineDirection: {
            control: 'select',
            options: ['horizontal', 'vertical'],
            description: 'Direction of the shine effect',
        },
    },
};

export default meta;
type Story = StoryObj<typeof SMetallicButton>;

export const Default: Story = {
    render: ({ children, ...args }) => (
        <SMetallicButton {...args}>
            <CircumIcons.CiFaceSmile /> {children}
        </SMetallicButton>
    ),
    args: {
        $shouldShine: true,
        width: MIN_WIDTH,
        height: MIN_HEIGHT,
        $shineDuration: 2,
        $iconSize: 24,
        $shineColor: 'rgba(255, 255, 255, 0.5)',
        $iconColor: 'black',
        $shineDirection: 'horizontal',
    },
};

const iconSeries = [
    { name: 'Font Awesome Icons', icons: FontAwesomeIcons, count: Object.keys(FontAwesomeIcons).length },
    { name: 'Font Awesome 6 Icons', icons: FontAwesome6Icons, count: Object.keys(FontAwesome6Icons).length },
    { name: 'Ant Design Icons', icons: AntIcons, count: Object.keys(AntIcons).length },
    { name: 'Bootstrap Icons', icons: BootstrapIcons, count: Object.keys(BootstrapIcons).length },
    { name: 'BoxIcons', icons: BoxIcons, count: Object.keys(BoxIcons).length },
    { name: 'Circum Icons', icons: CircumIcons, count: Object.keys(CircumIcons).length },
    { name: 'css.gg', icons: CssIcons, count: Object.keys(CssIcons).length },
    { name: 'Devicons', icons: DevIcons, count: Object.keys(DevIcons).length },
    { name: 'Feather', icons: FeatherIcons, count: Object.keys(FeatherIcons).length },
    { name: 'Flat Color Icons', icons: FlatColorIcons, count: Object.keys(FlatColorIcons).length },
    { name: 'Game Icons', icons: GameIcons, count: Object.keys(GameIcons).length },
    { name: 'Github Octicons', icons: GithubIcons, count: Object.keys(GithubIcons).length },
    { name: 'Grommet-Icons', icons: GrommetIcons, count: Object.keys(GrommetIcons).length },
    { name: 'Heroicons', icons: Heroicons, count: Object.keys(Heroicons).length },
    { name: 'Heroicons 2', icons: Heroicons2, count: Object.keys(Heroicons2).length },
    { name: 'IcoMoon Free', icons: IcoMoonIcons, count: Object.keys(IcoMoonIcons).length },
    { name: 'Ionicons 5', icons: Ionicons5, count: Object.keys(Ionicons5).length },
    { name: 'Lucide', icons: LucideIcons, count: Object.keys(LucideIcons).length },
    { name: 'Material Design icons', icons: MaterialIcons, count: Object.keys(MaterialIcons).length },
    { name: 'Radix Icons', icons: RadixIcons, count: Object.keys(RadixIcons).length },
    { name: 'Remix Icon', icons: RemixIcons, count: Object.keys(RemixIcons).length },
    { name: 'Simple Icons', icons: SimpleIcons, count: Object.keys(SimpleIcons).length },
    { name: 'Simple Line Icons', icons: SimpleLineIcons, count: Object.keys(SimpleLineIcons).length },
    { name: 'Tabler Icons', icons: TablerIcons, count: Object.keys(TablerIcons).length },
    { name: 'Themify Icons', icons: ThemifyIcons, count: Object.keys(ThemifyIcons).length },
    { name: 'VS Code Icons', icons: VSCodeIcons, count: Object.keys(VSCodeIcons).length },
    { name: 'Weather Icons', icons: WeatherIcons, count: Object.keys(WeatherIcons).length },
];

export const ReactIconsSearch: Story = {
    parameters: {
        controls: {
            disable: true,
        },
    },
    render: () => {
        const [searchTerm, setSearchTerm] = useState('');

        const allIconSeries = useMemo(() => {
            const totalIcons = iconSeries.reduce((acc, series) => acc + series.count, 0);
            return [{ name: 'All Icons', icons: {}, count: totalIcons }, ...iconSeries];
        }, []);

        const [selectedSeries, setSelectedSeries] = useState(allIconSeries[0]);

        const searchMode = searchTerm.trim().length >= 2;

        const searchResults = useMemo(() => {
            if (!searchMode) return [];

            const seriesToSearch = selectedSeries.name === 'All Icons' ? iconSeries : [selectedSeries];

            const allFoundIcons = [];
            for (const series of seriesToSearch) {
                const foundIcons = Object.entries(series.icons)
                    .filter(
                        ([name, icon]) =>
                            typeof icon === 'function' &&
                            !name.toLowerCase().startsWith('icon') &&
                            name.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map(([name, component]) => ({
                        name,
                        component: component as ComponentType<{ size: number }>,
                    }));

                if (foundIcons.length > 0) {
                    allFoundIcons.push({
                        name: series.name,
                        count: foundIcons.length,
                        icons: foundIcons.slice(0),
                    });
                }
            }
            return allFoundIcons;
        }, [searchTerm, searchMode, selectedSeries]);

        const seriesIcons = useMemo(() => {
            if (searchMode || selectedSeries.name === 'All Icons') return [];
            return Object.entries(selectedSeries.icons)
                .filter(([name, icon]) => typeof icon === 'function' && !name.toLowerCase().startsWith('icon'))
                .map(([name, component]) => ({
                    name,
                    component: component as React.ComponentType<{ size: number }>,
                }));
        }, [selectedSeries, searchMode]);

        console.log({ a: seriesIcons });

        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '2rem',
                    maxWidth: '1200px',
                    minHeight: '100vh',
                    height: 'fit-content',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        gap: '1rem',
                        alignItems: 'flex-start',
                    }}
                >
                    <select
                        value={selectedSeries.name}
                        onChange={(e) => {
                            const series = allIconSeries.find((s) => s.name === e.target.value);
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
                        {allIconSeries.map((series) => (
                            <option key={series.name} value={series.name}>
                                {series.name} ({series.count} icons)
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder={`Search in ${selectedSeries.name} (min 2 chars)...`}
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
                <div
                    style={{
                        height: 'fit-content',
                        backgroundColor: 'black',
                    }}
                >
                    {searchMode ? (
                        <>
                            {searchResults.length === 0 && (
                                <div style={{ color: 'white', textAlign: 'center' }}>
                                    No icons found for "{searchTerm}".
                                </div>
                            )}
                            {searchResults.map((series) => (
                                <div key={series.name}>
                                    <h3
                                        style={{
                                            color: 'white',
                                            borderBottom: '1px solid #666',
                                            paddingBottom: '0.5rem',
                                            position: 'sticky',
                                            top: 0,
                                            backgroundColor: '#000000',
                                            zIndex: 1,
                                        }}
                                    >
                                        {series.name} ({series.count} found)
                                    </h3>
                                    <div
                                        style={{
                                            display: 'flex',
                                            gap: '1rem',
                                            flexWrap: 'wrap',
                                        }}
                                    >
                                        {series.icons.map(({ name, component: Icon }) => (
                                            <SMetallicButton key={name} $iconSize={24} $shouldShine={true}>
                                                <Icon size={24} />
                                            </SMetallicButton>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <div
                            style={{
                                display: 'flex',
                                gap: '1rem',
                                flexWrap: 'wrap',
                                height: 'fit-content',
                            }}
                        >
                            {seriesIcons.map(({ name, component: Icon }) => (
                                <SMetallicButton key={name} $iconSize={24} $shouldShine={true}>
                                    <Icon size={24} />
                                </SMetallicButton>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    },
};
