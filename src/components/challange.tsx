type NameProps = {
  type: 'basic' | 'advanced';
  name: string;
  email?: string;
};

function Component(pros: NameProps) {
  const { type, name, email } = pros;

  const alertType = type === 'basic' ? 'alert-error' : 'alert-success';
  const classname = `alert ${alertType}`;

  return (
    <div className="space-y-4">
      <div className={classname}>
        <p>Name: {name}</p>
        {email && <p>Email: {email}</p>}
      </div>
    </div>
  );
}

export default Component;
