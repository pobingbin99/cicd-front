import {memo} from 'react';
import "./Decor.css";

const ITEMS = ['🌸', '💖', '✨', '🎀', '🦄', '🍓', '🌷', '⭐', '🧁', '🦋', '💎', '🌈', '🍭', '☁️', '🐰', '👑'];

const Decor = () => {
    return (
        <div className="Decor" aria-hidden="true">
            {ITEMS.map((emoji, i) => (
                <span
                    key={i}
                    style={{
                        left: `${(i * 37 + 5) % 96}%`,
                        fontSize: `${28 + (i * 13) % 36}px`,
                        animationDuration: `${9 + (i * 7) % 9}s`,
                        animationDelay: `${-(i * 3) % 12}s`,
                    }}
                >
                    {emoji}
                </span>
            ))}
            <span className="corner tl">🌸🎀</span>
            <span className="corner tr">🦄✨</span>
            <span className="corner bl">🍓🧁</span>
            <span className="corner br">🌈🐰</span>
        </div>
    );
};

export default memo(Decor);
