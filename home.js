function Home(){
  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Bad Bank Landing Page"
      title="Welcome to the Bank"
      text="You can use this Bank"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive Image"/>)}
      
    />
  );
}