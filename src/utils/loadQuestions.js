export const loadQuestions = async () => {
    try {
        const response = await fetch('/data/questions.json');
        if (!response.ok) throw new Error('HTTP error ' + response.status);
        return await response.json();
    } catch (error) {
        console.error('题目加载失败:', error);
        return [];
    }
};