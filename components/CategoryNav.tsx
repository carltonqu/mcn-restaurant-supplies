'use client';

interface Category {
  id: string;
  title: string;
}

interface CategoryNavProps {
  categories: Category[];
}

export default function CategoryNav({ categories }: CategoryNavProps) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.75rem',
      justifyContent: 'center',
      marginBottom: '3rem',
    }}>
      {categories.map((cat) => (
        <a
          key={cat.id}
          href={`#${cat.id}`}
          style={{
            backgroundColor: '#F5F5F5',
            color: '#0D0D0D',
            padding: '0.625rem 1.25rem',
            borderRadius: '100px',
            fontSize: '0.875rem',
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#F5C800';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#F5F5F5';
          }}
        >
          {cat.title}
        </a>
      ))}
    </div>
  );
}
