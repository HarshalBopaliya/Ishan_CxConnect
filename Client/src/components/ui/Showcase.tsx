import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Container from './Container';
import Input from './Input';
import Button from './Button';
import Dropdown from './Dropdown';
import RadioGroup from './RadioGroup';
import Checkbox from './Checkbox';
import Toggle from './Toggle';
import StatusChip from './StatusChip';
import Card from './Card';
import Spinner from './Spinner';
import Skeleton from './Skeleton';
import MultiSelectDropdown from './MultiSelectDropdown';
import Textarea from "./Textarea"
import FileUpload from './FileUpload';
import InfoModal from './InfoModal';
import Alert from './Alert';
import Note from './Note';
import StatusSelector from './StatusSelector';
import ColorSelector from './ColorSelector';
import DateRangePicker from './DateRangePicker';

const Showcase: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [disabledValue, setDisabledValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');
  const [multiValues, setMultiValues] = useState<string[]>([]);
  const [hasError, setHasError] = useState(false);
  const [radioValue, setRadioValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [checkboxValue2, setCheckboxValue2] = useState(false);
  const [checkboxValue3, setCheckboxValue3] = useState(false);
  const [toggleValue, setToggleValue] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [showAlert, setShowAlert] = useState(true);
  const [showNote, setShowNote] = useState(true);
  const [status, setStatus] = useState<'active' | 'inactive'>('active');
  const [groupColor, setGroupColor] = useState('#ffffff');
  const [text, setText] = useState("")
  const [range, setRange] = useState<{
    startDate: Date;
    endDate: Date;
  } | null>(null);

  const radioOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
  ];

  const handleSearch = () => {
    console.log('Searching for:', searchValue);
  };

  const validateInput = (value: string) => {
    const hasValidationError = value.length > 0 && value.length < 3;
    setHasError(hasValidationError);
    setInputValue(value);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            UI Components Library
          </h1>
          <p className="text-lg text-gray-600">
            Reusable React + TailwindCSS components with modern design
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-20 space-y-2 text-sm">
              <a href="#buttons" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700">Buttons</a>
              <a href="#input-fields" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700">Input Fields</a>
              <a href="#search-bar" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700">Search Bar</a>
              <a href="#dropdown" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700">Dropdown</a>
              <a href="#multi-select-dropdown" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700">Multi Select Dropdown</a>
              <a href="#date-picker" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700">Date Picker</a>
              <a href="#file-upload" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700">File Upload</a>
              <a href="#container-variants" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700">Container Variants</a>
              <a href='#modal' className='block px-3 py-2 rounded hover:bg-gray-100 text-gray-700'> Modal </a>
              <a href="#radio-group" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700">Radio Group</a>
              <a href="#checkbox" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700">Checkbox</a>
              <a href="#toggle" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700">Toggle</a>
              <a href="#status-chip" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700">Status Chip</a>
              <a href="#complete-form" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700">Complete Form</a>
              <a href="#card" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700">Card</a>
              <a href="#skeleton" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700">Skeleton</a>
              <a href="#status-selector" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700">Status Selector</a>
              <a href="#color-selector" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700">Color Selector</a>
              <a href="#alerts" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700">Alerts</a>
              <a href="#notes" className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700">Notes</a>
            </div>
          </aside>

          <main className="lg:col-span-9 space-y-12">
            {/* Button Examples */}
            <Container>
              <h2 id="buttons" className="text-2xl font-semibold text-gray-800 mb-6">Buttons</h2>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Button label="Primary Button" variant="primary" />
                  <Button label="Secondary Button" variant="secondary" />
                  <Button label="Outline Button" variant="outline" />
                  <Button label="Disabled Button" disabled />
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button label="Small" size="sm" />
                  <Button label="Medium" size="md" />
                  <Button label="Large" size="lg" />
                </div>
              </div>
            </Container>

            {/* Input Examples */}
            <Container>
              <h2 id="input-fields" className="text-2xl font-semibold text-gray-800 mb-6">Input Fields</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Username"
                  placeholder="Enter your username"
                  value={inputValue}
                  onChange={(e) => validateInput(e.target.value)}
                  helperText="Minimum 3 characters required"
                  error={hasError}
                  errorText="Username must be at least 3 characters long"
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                />
                <Input
                  label="Disabled Input"
                  placeholder="This is disabled"
                  value={disabledValue}
                  onChange={(e) => setDisabledValue(e.target.value)}
                  disabled
                />
                <Textarea
                  value={text}
                  onChange={e => setText(e.target.value)}
                  placeholder="Enter your text here"
                  rows={4}
                />
                <div style={{ marginTop: "1rem", color: "#777" }}>
                  Output:
                  <pre>{text}</pre>
                </div>
              </div>
            </Container>

            {/* Search Bar Example */}
            <Container>
              <h2 id="search-bar" className="text-2xl font-semibold text-gray-800 mb-6">Search Bar</h2>
              <div className="flex justify-center">
                <SearchBar
                  placeholder="Search for anything..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onSearch={handleSearch}
                  className="w-full max-w-md"
                />
              </div>
            </Container>

            {/* Dropdown Example */}
            <Container>
              <h2 id="dropdown" className="text-2xl font-semibold text-gray-800 mb-6">Dropdown</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select an option
                  </label>
                  <Dropdown
                    options={dropdownOptions}
                    value={dropdownValue}
                    onChange={setDropdownValue}
                    placeholder="Choose an option..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Disabled dropdown
                  </label>
                  <Dropdown
                    options={dropdownOptions}
                    value=""
                    onChange={() => { }}
                    placeholder="This is disabled"
                    disabled
                  />
                </div>
              </div>
              {dropdownValue && (
                <p className="mt-4 text-sm text-gray-600">
                  Selected value: <span className="font-semibold">{dropdownValue}</span>
                </p>
              )}
            </Container>

            {/* Multi Select Dropdown Example */}
            <Container>
              <h2 id="multi-select-dropdown" className="text-2xl font-semibold text-gray-800 mb-6">Multi Select Dropdown</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select multiple options
                  </label>
                  <MultiSelectDropdown
                    options={dropdownOptions}
                    values={multiValues}
                    onChange={setMultiValues}
                    placeholder="Choose one or more..."
                  />
                </div>
              </div>
              {multiValues.length > 0 && (
                <p className="mt-4 text-sm text-gray-600">
                  Selected values: <span className="font-semibold">{multiValues.join(', ')}</span>
                </p>
              )}
            </Container>

            {/* Date Picker Example */}
            {/* <Container>
              <h2 id="date-picker" className="text-2xl font-semibold text-gray-800 mb-6">Date Picker</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DatePicker
                  label="Select a date"
                  value={selectedDate}
                  onChange={(v) => setSelectedDate(v)}
                  helperText="Pick any convenient date"
                />
                <DatePicker
                  label="With constraints"
                  value={selectedDate}
                  onChange={(v) => setSelectedDate(v)}
                  min="2020-01-01"
                  max="2030-12-31"
                />
              </div>
              {selectedDate && (
                <p className="mt-4 text-sm text-gray-600">Selected date: <span className="font-semibold">{selectedDate}</span></p>
              )}
            </Container> */}

            {/* React date picker example */}

            <Container>
              <h2 id="date-picker" className="text-2xl font-semibold text-gray-800 mb-6">Date Picker</h2>
              <DateRangePicker
                label="Select Range"
                value={range}
                onChange={setRange}
                minDate={new Date(2020, 0, 1)}
                maxDate={new Date()}
                className="w-52 h-8 text-xs px-2 py-1 rounded-md"
              />
              <div className="mt-2 text-sm text-gray-600">
                {range ? `${range.startDate.toDateString()} → ${range.endDate.toDateString()}` : 'No range selected'}
              </div>
            </Container>

            {/* File Upload Example */}
            <Container>
              <h2 id="file-upload" className="text-2xl font-semibold text-gray-800 mb-6">File Upload</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FileUpload
                  label="Upload a file"
                  onChange={(files) => setUploadedFiles(files)}
                  accept=".png,.jpg,.jpeg,.pdf"
                />
                <FileUpload
                  label="Upload multiple files"
                  onChange={(files) => setUploadedFiles(files)}
                  multiple
                />
              </div>
              {uploadedFiles.length > 0 && (
                <ul className="mt-4 text-sm text-gray-600 list-disc list-inside">
                  {uploadedFiles.map((f, idx) => (
                    <li key={idx} className="truncate">{f.name}</li>
                  ))}
                </ul>
              )}
            </Container>

            {/* Container Examples */}
            <Container>
              <h2 id="container-variants" className="text-2xl font-semibold text-gray-800 mb-6">Container Variants</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Container padding="sm" shadow="none" className="border-2 border-dashed border-gray-300">
                  <p className="text-gray-600">Small padding, no shadow</p>
                </Container>
                <Container padding="lg" shadow="lg">
                  <p className="text-gray-600">Large padding, large shadow</p>
                </Container>
                <Container padding="md" shadow="md" rounded={false}>
                  <p className="text-gray-600">Medium padding, no rounded corners</p>
                </Container>
                <Container padding="xl" shadow="sm" className="bg-blue-50 border-blue-200">
                  <p className="text-blue-800">Extra large padding, custom background</p>
                </Container>
              </div>
            </Container>

            {/* Modal Example */}
            <Container>
              <h1 id="modal" className="text-2xl font-bold mb-4">My Page</h1>
              <div className="flex items-center space-x-2">
                <span>Click the icon for more information.</span>
                <InfoModal title="About this Feature">
                  <p>This is a custom modal created with React and Tailwind CSS. You can place any content here, such as text, images, or other components.</p>
                  <ul className="mt-2 list-disc list-inside">
                    <li>It opens and closes with the "i" icon.</li>
                    <li>It can also be closed by pressing the Escape key.</li>
                    <li>Clicking the overlay outside the modal will close it.</li>
                  </ul>
                </InfoModal>
              </div>
            </Container>

            {/* Radio Group Example */}
            <Container>
              <h2 id="radio-group" className="text-2xl font-semibold text-gray-800 mb-6">Radio Group</h2>
              <RadioGroup
                name="radioGroup"
                options={radioOptions}
                value={radioValue}
                onChange={setRadioValue}
                direction="horizontal"
                error={hasError}
                groupLabel="Select an option"
                className="w-full max-w-md"
              />
            </Container>

            {/* Checkbox Example */}
            <Container>
              <h2 id="checkbox" className="text-2xl font-semibold text-gray-800 mb-6">Checkbox</h2>
              <Checkbox
                checked={checkboxValue}
                onChange={setCheckboxValue}
                label="Receive product updates"
                helperText="Email me about product news and tips"
                error={hasError}
              />
              <Checkbox
                checked={checkboxValue2}
                onChange={setCheckboxValue2}
                label="Enable analytics"
                helperText="Help improve the product by sharing usage data"
                error={hasError}
              />
              <Checkbox
                checked={checkboxValue3}
                onChange={setCheckboxValue3}
                label="Accept terms and conditions"
                helperText="You must accept before continuing"
                error={hasError}
              />
            </Container>

            {/* Toggle Example */}
            <Container>
              <h2 id="toggle" className="text-2xl font-semibold text-gray-800 mb-6">Toggle</h2>
              <Toggle
                checked={toggleValue}
                onChange={setToggleValue}
                label="Toggle"
                helperText="This is a toggle"
              />
            </Container>

            {/* Status Chip Example */}
            <Container>
              <h2 id="status-chip" className="text-2xl font-semibold text-gray-800 mb-6">Status Chip</h2>
              <StatusChip label="Active" variant="active" />
              <StatusChip label="Inactive" variant="inactive" />
              <StatusChip label="Success" variant="success" />
              <StatusChip label="Warning" variant="warning" />
              <StatusChip label="Error" variant="error" />
              <StatusChip label="Info" variant="info" />
              <StatusChip label="Pending" variant="pending" />
              <StatusChip label="Neutral" variant="neutral" />
            </Container>

            {/* Complete Form Example */}
            {/* <Container shadow="lg">
              <h2 id="complete-form" className="text-2xl font-semibold text-gray-800 mb-6">Complete Form Example</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="First Name"
                    placeholder="John"
                    value=""
                    onChange={() => { }}
                  />
                  <Input
                    label="Last Name"
                    placeholder="Doe"
                    value=""
                    onChange={() => { }}
                  />
                </div>
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="john@example.com"
                  value=""
                  onChange={() => { }}
                  helperText="We'll never share your email with anyone else"
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <Dropdown
                    options={[
                      { value: 'us', label: 'United States' },
                      { value: 'ca', label: 'Canada' },
                      { value: 'uk', label: 'United Kingdom' },
                      { value: 'au', label: 'Australia' },
                    ]}
                    value=""
                    onChange={() => { }}
                    placeholder="Select your country"
                  />
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button label="Submit" type="submit" variant="primary" />
                  <Button label="Cancel" variant="outline" />
                </div>
              </form>
            </Container> */}

            {/* Card and Spinner Example */}
            <Container>
              <h2 id="card" className="text-2xl font-semibold text-gray-800 mb-6">Card</h2>
              <Card>
                <p className="text-gray-600">This is a card</p>
                <p> This is a spinner</p>
                <Spinner className='pr-4' />
                <Spinner size="sm" className='pr-4' />
                <Spinner size="md" className='pr-4' />
                <Spinner size="lg" className='pr-4' />
              </Card>
            </Container>

            {/* Skeleton Example */}
            <Container>
              <h2 id="skeleton" className="text-2xl font-semibold text-gray-800 mb-6">Skeleton</h2>
              <Skeleton rows={5} columns={8} />
            </Container>

            {/* Status Selector Example */}
            <Container>
              <h2 id="status-selector" className="text-2xl font-semibold text-gray-800 mb-6">Status Selector</h2>
              <div className="flex items-center gap-4">
                <StatusSelector value={status} onChange={setStatus} />
                <span className="text-sm text-gray-600">Current: <span className="font-semibold capitalize">{status}</span></span>
              </div>
            </Container>

            {/* Color Selector Example */}
            <Container>
              <h2 id="color-selector" className="text-2xl font-semibold text-gray-800 mb-6">Group Color</h2>
              <div className="flex items-center gap-4">
                <ColorSelector
                  value={groupColor}
                  onChange={setGroupColor}
                  presets={['#ffffff', '#ef4444', '#3b82f6', '#22c55e', '#ec4899', '#eab308', '#7c3aed']}
                />
                <div className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="h-6 w-6 rounded-md border" style={{ backgroundColor: groupColor }} />
                  <span>{groupColor}</span>
                </div>
              </div>
            </Container>

            {/* Alerts Example */}
            <Container>
              <h2 id="alerts" className="text-2xl font-semibold text-gray-800 mb-6">Alerts</h2>
              <div className="space-y-3">
                {showAlert && (
                  <Alert
                    title="Heads up!"
                    message="This is an informational alert with a dismiss action."
                    variant="info"
                    onClose={() => setShowAlert(false)}
                  />
                )}
                <Alert title="Success" message="Your changes have been saved." variant="success" />
                <Alert title="Warning" message="Please double-check your entries." variant="warning" />
                <Alert title="Error" message="Something went wrong. Try again." variant="error" />
              </div>
            </Container>

            {/* Notes Example */}
            <Container>
              <h2 id="notes" className="text-2xl font-semibold text-gray-800 mb-6">Notes</h2>
              <div className="space-y-3">
                {showNote && (
                  <Note onClose={() => setShowNote(false)}>
                    This area highlights helpful context or instructions. You can dismiss this note.
                  </Note>
                )}
                <Note variant="tip">Pro tip: You can press ⌘K or Ctrl+K to open search.</Note>
                <Note variant="warning">Remember to save your work frequently.</Note>
              </div>
            </Container>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Showcase;