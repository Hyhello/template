const oneOf = <T>(target: T, list: T[]): boolean => {
    return list.includes(target);
};

export default {
    oneOf
};
