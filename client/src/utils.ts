export function reverseMap<K extends string, V extends string>(
    map: Record<K, V>
): Record<V, K> {
    const reversed: Record<V, K> = {} as Record<V, K>;
    for (const key in map) {
        if (Object.prototype.hasOwnProperty.call(map, key)) {
            const value = map[key];
            reversed[value] = key;
        }
    }
    return reversed;
}
