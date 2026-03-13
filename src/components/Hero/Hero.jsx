export default function Hero() {
    return (
        <section style={{ textAlign: 'center', padding: '100px 20px'}}>
            <h1>
                Создайте свой онлайн магазин
            </h1>
            <p>
                Простой конструктор для вашего бизнеса без навыков программировния
            </p>
            <section id="features">
                <div className='container'>
                    <h2>Наши преимущества</h2>
                    <p>Тут будет список крутых фишек вашего сервиса.</p>
                </div>
            
            </section>

            <section id="about" style={{ padding: '50px' }}>
                <div className='container'>
                    <h2>О нас</h2>
                    <p>Тут будет представлена информация о нас</p>
                </div>          
            </section>

            <section id="contact" style={{ padding: '50px' }}>
            <div className='container'>
            <h2>Контакты</h2>
            <p>Тут будет представлена информация о нас</p>
            </div>          
            </section>
            
        </section>

        
    );
}