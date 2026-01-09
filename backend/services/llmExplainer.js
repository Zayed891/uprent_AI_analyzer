
const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

export const enhanceUrgency = async (application, urgencyScore) => {
    const hoursSinceApplied = Math.floor(Date.now() - new Date(application.appliedAt)) / (1000 * 60 * 60);

    const prompt = `
     You are assisting a landlord reviewing rental applications.

     Urgency score: ${urgencyScore}/100

     Signals:
     - Applied ${hoursSinceApplied} hours ago
     - Profile complete: ${application.profileComplete}
     - Applied in ${application.timeToApplyMins} minutes
     - Landlord responded: ${application.landLordResponded}

    Task:
     1. Explain briefly why this application needs attention
     2. Explain what the landlord risks by delaying

    Return JSON ONLY in this exact format:
    {
      "reason": "...",
      "risk": "..."
    }` ;

    const response = await fetch(OPENROUTER_URL, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.OPEN_ROUTER_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'openai/gpt-4o-mini',
            messages: [
                {
                    role: 'user',
                    content: `${prompt}`,
                },
            ],
        }),
    });

    const data =await response.json();
    
    return JSON.parse(data.choices[0].message.content);
}